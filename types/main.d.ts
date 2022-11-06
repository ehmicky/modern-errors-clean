import type { Info } from 'modern-errors'

/**
 * `modern-errors-clean` plugin.
 *
 * This plugin
 * [cleans up stack traces](https://github.com/sindresorhus/clean-stack).
 */
declare const plugin: {
  name: 'clean'
  properties: (info: Info['properties']) => { stack: string }
}
export default plugin
