# catch-safe

> Inspired by and adapted from the example code in
> [this article](https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript) by
> Kent C. Dodds

Since TypeScript 4.4, catch clause variables default to the `unknown` type. This library provides a
zero-dependency utility function which allows you to extract the error message in a type-safe manner
when the variable is of type `Error`.

## Installation

Install the package in your project:

```sh
# NPM
npm install catch-safe

# Yarn
yarn add catch-safe

# PNPM
pnpm add catch-safe
```

## Usage

Import the `getErrorMessage` function from the `catch-safe` module and use it to get the error
message (if it exists) from a catch block variable :

```ts
import { getErrorMessage } from 'catch-safe'

async function someAsyncFunction() {
  try {
    await runAsyncTask()
  } catch (err) {
    throw new Error(getErrorMessage(err))
  }
}
```
