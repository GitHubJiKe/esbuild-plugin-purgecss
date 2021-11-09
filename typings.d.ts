import { PurgeCSS } from 'purgecss'
import { Plugin } from 'esbuild';


type TFullOptions = Exclude<NonNullable<Parameters<typeof PurgeCSS.prototype.purge>[0]>, string>

declare type TOptions = Omit<TFullOptions, 'css' | 'content'>

declare function purgecssPlugin(options?: TOptions): Plugin;


export = purgecssPlugin;