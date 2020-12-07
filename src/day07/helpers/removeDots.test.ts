import removeDots from './removeDots'

describe('removeDots', () => {
  it('should remove dot from the end', () => {
    expect(removeDots('1 test sentence.')).toBe('1 test sentence')
  })
})
