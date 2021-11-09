import { PurgeCSS } from 'purgecss'
import path from 'path'
import fs from 'fs'
import { Plugin, PluginBuild } from 'esbuild';

const purge = new PurgeCSS().purge

type TFullOptions = Exclude<NonNullable<Parameters<typeof purge>[0]>, string>
type TOptions = Omit<TFullOptions, 'css' | 'content'>

module.exports = function purgecssPlugin(options?: TOptions): Plugin {
    return {
        name: "purgecss",
        setup(build: PluginBuild) {
            if (!build.initialOptions.metafile) {
                throw new Error("You should set metafile true to use this plugin.")
            }

            build.onEnd(async args => {
                const outputKeys = Object.keys(args.metafile!.outputs)

                const genFilter = (postfix: string) => (k: string) => k.endsWith(postfix)
                const resolvePath = (p: string) => path.resolve(__dirname, p)

                const content = outputKeys.filter(genFilter('.js')).map(resolvePath)
                const css = outputKeys.filter(genFilter('.css')).map(resolvePath)

                const res = await purge({ ...options, content, css })

                for (let index = 0; index < res.length; index++) {
                    const { file, css } = res[index]
                    await fs.promises.writeFile(file!, css)
                }
            })
        }
    }
}