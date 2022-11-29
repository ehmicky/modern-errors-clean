import { expectType, expectError } from 'tsd'

import ModernError from 'modern-errors'
import modernErrorsClean from 'modern-errors-clean'

const BaseError = ModernError.subclass('BaseError', {
  plugins: [modernErrorsClean],
})
const error = new BaseError('')

expectError(
  ModernError.subclass('TestError', {
    plugins: [modernErrorsClean],
    stack: undefined,
  }),
)

expectType<string | undefined>(error.stack)
