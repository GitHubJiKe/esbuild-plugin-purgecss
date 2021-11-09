const esbuild = require('esbuild')

esbuild.build({
    entryPoints: ['src/index.ts'],
    outfile: "index.js",
    platform: "node",
    target: ["node14"],
    loader: { ".js": "ts" },
    bundle: true,
    minify: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    tsconfig: 'tsconfig.json',
}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})