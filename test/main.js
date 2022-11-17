import { cwd as getCwd } from 'node:process'

import test from 'ava'
import modernErrors from 'modern-errors'
import modernErrorsClean from 'modern-errors-clean'

const StackBaseError = modernErrors([modernErrorsClean])
StackBaseError.subclass('UnknownError')
const StackError = StackBaseError.subclass('StackError')
const stackError = new StackError('test')

const NoStackBaseError = modernErrors()
NoStackBaseError.subclass('UnknownError')
const NoStackError = NoStackBaseError.subclass('NoStackError')
const noStackError = new NoStackError('test')

const cwd = getCwd()

// The first lines sometimes contain a preview
const isCleanStack = function (stack) {
  return !stack.split('\n').slice(1).join('\n').includes(cwd)
}

test('stack is cleaned', (t) => {
  t.false(isCleanStack(noStackError.stack))
  t.true(isCleanStack(stackError.stack))
})

test('stack remains non-enumerable', (t) => {
  t.false(Object.getOwnPropertyDescriptor(stackError, 'stack').enumerable)
})
