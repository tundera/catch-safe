import { expect, test } from 'vitest'
import { getErrorMessage } from '../src/get-error-message'

const getThrown = (thrown: unknown) => {
  try {
    throw thrown
  } catch (error) {
    // we'll proceed, but let's report it
    return getErrorMessage(error)
  }
}

test('error message valid variable is of type `Error`', async () => {
  const error = getThrown(new Error('Oh no!'))

  expect(getErrorMessage(error)).toEqual(`"Oh no!"`)
})

test('error message is an empty object when catch variable is not of type `Error`', async () => {
  const error = getThrown(Promise.resolve('Hello'))

  expect(getErrorMessage(error)).toEqual(`"{}"`)
})
