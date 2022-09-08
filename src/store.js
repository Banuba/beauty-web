import cloneDeep from "https://cdn.jsdelivr.net/npm/lodash-es/cloneDeep.min.js"
import create from "https://cdn.jsdelivr.net/npm/lodash-es/create.min.js"
import isArray from "https://cdn.jsdelivr.net/npm/lodash-es/isArray.min.js"
import isEqual from "https://cdn.jsdelivr.net/npm/lodash-es/isEqual.min.js"
import isPlainObject from "https://cdn.jsdelivr.net/npm/lodash-es/isPlainObject.min.js"
import merge from "https://cdn.jsdelivr.net/npm/lodash-es/mergeWith.min.js"
import omit from "https://cdn.jsdelivr.net/npm/lodash-es/omit.min.js"
import { createEventEmitter } from "./lib.js"

const modules = {}

const ee = createEventEmitter()

const module = (name, initValues, methods) => {
  if (!initValues) return modules[name]

  let prototype = {
    emit: function (event, ...args) {
      ee.emit(`${name}:${event}`, ...args)
    },
    update: function (key, updates) {
      if (typeof key === "string") {
        if (isPlainObject(updates)) merge(this[key], updates)
        else this[key] = updates

        this.emit("changed", key, this[key])
      } else {
        this.emit(
          "changed",
          merge(this, (updates = key), (dest, src) => {
            if (isArray(dest)) return src
          })
        )
      }
    },
    reset: function (...keys) {
      if (!keys.length) return this.update(initValues)

      keys.forEach((name) => {
        if (initValues.hasOwnProperty(name)) this.update({ [name]: initValues[name] })
      })
    },
    isEqual: function (compare) {
      for (const [name, value] of Object.entries(compare)) {
        const omittedThis = this[name].title ? omit(this[name], ["title"]) : this[name]
        const omittedValue = this[name].title ? omit(value, ["title"]) : value
        if (!isEqual(omittedThis, omittedValue)) return false
      }
      return true
    },
  }

  if (methods) prototype = create(prototype, methods)

  return (modules[name] = create(prototype, cloneDeep(initValues)))
}

const reset = () => {
  for (const module of Object.values(modules)) module.reset()
}

export function updateEach(key, updates) {
  const { update } = Object.getPrototypeOf(Object.getPrototypeOf(this))

  if (typeof key === "string") update.call(this, key, updates)
  else for (const [name, value] of Object.entries((updates = key))) update.call(this, name, value)
}

export function resetEach(...keys) {
  const { reset } = Object.getPrototypeOf(Object.getPrototypeOf(this))

  if (keys.length === 0) keys = Object.keys(this)

  reset.apply(this, keys)
}

export default {
  _modules: modules,

  on: ee.on.bind(ee),
  off: ee.off.bind(ee),
  module,
  reset,
}
