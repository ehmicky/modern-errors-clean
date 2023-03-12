import { basename } from 'node:path'
import { cwd as getCwd } from 'node:process'

import test from 'ava'
import ModernError from 'modern-errors'

import modernErrorsClean from 'modern-errors-clean'

const StackError = ModernError.subclass('StackBaseError', {
  plugins: [modernErrorsClean],
})
const stackError = new StackError('test')

const NoStackError = ModernError.subclass('NoStackBaseError')
const noStackError = new NoStackError('test')

const repoName = basename(getCwd())

// The first lines sometimes contain a preview
const isCleanStack = (stack) =>
  !stack.split('\n').slice(1).join('\n').includes(repoName)

test('stack is cleaned', (t) => {
  // eslint-disable-next-line no-console, no-restricted-globals
  console.log({ repoName })
  // eslint-disable-next-line no-console, no-restricted-globals
  console.log({ one: noStackError.stack })
  // eslint-disable-next-line no-console, no-restricted-globals
  console.log({ two: stackError.stack })
  t.false(isCleanStack(noStackError.stack))
  t.true(isCleanStack(stackError.stack))
})

test('stack remains non-enumerable', (t) => {
  t.false(Object.getOwnPropertyDescriptor(stackError, 'stack').enumerable)
})
