import ModernError from 'modern-errors'
import modernErrorsClean from 'modern-errors-clean'
import { expectType } from 'tsd'

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
