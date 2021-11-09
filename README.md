# esbuild-plugin-purgecss

 <a href='https://www.npmjs.com/package/esbuild-plugin-purgecss' style='margin: 0 0.2rem;' />
    <img src='https://img.shields.io/npm/v/esbuild-plugin-purgecss' alt='npm version' height='18'>
  </a>

> [esbuild](https://esbuild.github.io/) plugin of [purgecss](https://www.purgecss.cn/)

## usage

```shell
npm i -D esbuild-plugin-purgecss

```

```javascript
const purgecssPlugin = require("esbuild-plugin-purgecss")

esbuild.build({
    ...,
    plugins: [purgecssPlugin()]
    }
)
```