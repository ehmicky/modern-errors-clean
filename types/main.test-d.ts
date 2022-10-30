import { expectType, expectError } from 'tsd'

import modernErrors from 'modern-errors'
import modernErrorsStack from 'modern-errors-stack'

const AnyError = modernErrors([modernErrorsStack])
const error = new AnyError('', { cause: '' })

expectError(modernErrors([modernErrorsStack], { stack: undefined }))

expectType<string | undefined>(error.stack)
