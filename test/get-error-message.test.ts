import { expect, test } from 'vitest'
import { getErrorMessage } from '../src/get-error-message'

const getThrown = (thrown: unknown) => {
  try {
    throw thrown
  } catch (error) {
    return getErrorMessage(error)
  }
}

const wrapWithDoubleQuotes = (text: string) => `"${text}"`

test('error message valid variable is of type `Error`', async () => {
  const error = getThrown(new Error('Oh no!'))

  expect(getErrorMessage(error)).toEqual(`"Oh no!"`)
})

test('error message is an empty error object when catch variable is not of type `Error`', async () => {
  const error = getThrown(Promise.resolve('Hello'))

  expect(getErrorMessage(error)).toEqual(wrapWithDoubleQuotes(JSON.stringify(new Error())))
})
