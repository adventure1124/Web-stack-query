import * as React from 'react'

// Since the `useErrorBoundary` property is string literal and not computed, the codemod should change it.
export type Type1 = {
  'useErrorBoundary'?: boolean
}

// Since the `useErrorBoundary` property is an identifier and not computed, the codemod should change it.
export type Type2 = {
  useErrorBoundary?: boolean
}

// Since the `useErrorBoundary` property is an identifier and not computed, and shorthand, the codemod should change it.
export function useSomething() {
  const queryInfo = useSomethingElse({
    useErrorBoundary,
    enabled,
  })

  return queryInfo
}

// Since the `useErrorBoundary` property is an identifier and not computed, the codemod should change it.
export const asIdentifierExample = () => {
  return {
    useErrorBoundary: true
  }
}

// Since the `useErrorBoundary` property is a string literal and not computed, the codemod should change it.
export const asStringLiteralExample = () => {
  return {
    'useErrorBoundary': true
  }
}

// Since the `useErrorBoundary` property is computed, the codemod shouldn't touch this example.
export const asComputedExample = () => {
  const useErrorBoundary = 'foo'

  return {
    [useErrorBoundary]: false
  }
}
