const esbuild = require('esbuild')

esbuild.build({
    entryPoints: ['src/index.js'],
    outfile: "index.js",
    platform: "node",
    target: ["node14"],
    bundle: true,
    minify: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})