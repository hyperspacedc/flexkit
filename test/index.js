import { assert } from 'chai'
import func from '../src/func'

describe('Func test', () => {
  it('should test func', () => {
    assert(func(1, 1) === 2)
  })
})
