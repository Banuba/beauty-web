const passthrough = (strings, ...values) =>
  strings.reduce(
    (previousValue, currentValue, index) => previousValue + (values[index - 1] || "") + currentValue
  )

// functions to pass through css and html
// so prettier can identify and format css and html code
export const css = passthrough
export const html = passthrough
