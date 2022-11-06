import { expectType, expectError } from 'tsd'

import modernErrors from 'modern-errors'
import modernErrorsClean from 'modern-errors-clean'

const AnyError = modernErrors([modernErrorsClean])
const error = new AnyError('', { cause: '' })

expectError(modernErrors([modernErrorsClean], { stack: undefined }))

expectType<string | undefined>(error.stack)
