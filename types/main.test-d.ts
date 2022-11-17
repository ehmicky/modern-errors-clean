import { expectType, expectError } from 'tsd'

import modernErrors from 'modern-errors'
import modernErrorsClean from 'modern-errors-clean'

const BaseError = modernErrors([modernErrorsClean])
const error = new BaseError('', { cause: '' })

expectError(modernErrors([modernErrorsClean], { stack: undefined }))

expectType<string | undefined>(error.stack)
