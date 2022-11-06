import process from 'node:process'

import cleanStack from 'clean-stack'

// Clean `error.stack`.
// `normalize-exception` used by `modern-errors` through `merge-error-cause`
// already ensures `error.stack` is a non-empty string.
const properties = function ({ error }) {
  const basePath = process.cwd()
  const stack = cleanStack(error.stack, { pretty: true, basePath })
  return { stack }
}

export default {
  name: 'stack',
  properties,
}
