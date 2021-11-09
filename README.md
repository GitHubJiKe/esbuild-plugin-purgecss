# esbuild-plugin-purgecss

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