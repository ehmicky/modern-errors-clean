import { expectType } from 'tsd'

import ModernError from 'modern-errors'
import modernErrorsClean from 'modern-errors-clean'

const BaseError = ModernError.subclass('BaseError', {
  plugins: [modernErrorsClean],
})
const error = new BaseError('')

ModernError.subclass('TestError', {
  plugins: [modernErrorsClean],
  // @ts-expect-error
  stack: undefined,
})

expectType<string | undefined>(error.stack)
