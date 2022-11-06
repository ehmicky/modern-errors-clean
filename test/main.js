import { cwd as getCwd } from 'node:process'

import test from 'ava'
import modernErrors from 'modern-errors'
import modernErrorsClean from 'modern-errors-clean'

const StackAnyError = modernErrors([modernErrorsClean])
StackAnyError.subclass('UnknownError')
const StackError = StackAnyError.subclass('StackError')
const stackError = new StackError('test')

const NoStackAnyError = modernErrors()
NoStackAnyError.subclass('UnknownError')
const NoStackError = NoStackAnyError.subclass('NoStackError')
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
