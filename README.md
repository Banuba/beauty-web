# Banuba SDK Web AR beautification and makeup demo app  
  
**Important**  
Please use [v0.x](../../tree/v0.x) branch for SDK version 0.x (e.g. v0.38).  
  
## Requirements

- The [latest](#obtaining-banuba-sdk-web-ar) Banuba SDK Web AR release
- Banuba [client token](#obtaining-banuba-client-token)
- [Nodejs](https://nodejs.org/en/) installed
- Browser with support of [WebGL 2.0](https://caniuse.com/#feat=webgl2)

### Obtaining Banuba SDK Web AR

To get the latest Banuba SDK Web AR release please fill in the [form on banuba.com](https://www.banuba.com/face-filters-sdk) website, or contact us via [info@banuba.com](mailto:info@banuba.com).

### Obtaining Banuba Client token

Banuba Client token is required to get Banuba SDK Web AR working.

Generally it's delivered with Banuba SDK Web AR archive.

To receive a new **trial** client token please fill in the [form on banuba.com](https://www.banuba.com/face-filters-sdk) website, or contact us via [info@banuba.com](mailto:info@banuba.com).

## Environment setup and local run

Clone the repository

```sh
git clone git@github.com:Banuba/beauty-web.git
```

Put Banuba SDK Web AR [files](#obtaining-banuba-sdk-web-ar) into the cloned folder

```diff
quickstart-web/
   BanubaClientToken.js
+  BanubaSDK.data
+  BanubaSDK.js
+  BanubaSDK.wasm
   index.html
   Makeup.zip
   README.md
   styles.css
```

Insert Banuba [client token](#obtaining-banuba-client-token) into `BanubaClientToken.js`

```js
window.BANUBA_CLIENT_TOKEN = "PUT YOUR CLIENT TOKEN HERE"
```

Run the live server in the cloned folder
```sh
npx live-server
```

Open [localhost:8080](http://localhost:8080) and start clicking :)
