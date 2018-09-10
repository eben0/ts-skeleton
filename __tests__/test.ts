/* eslint-env jest */
import 'jest'

import num from '../src/empty'

describe('Test', () => {
  it('works', () => {
    const x = num
    expect(x).toBe(123)
  })
})
