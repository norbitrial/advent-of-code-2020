import getCountByPosition from './getCountByPosition'

describe('getCountByPosition', () => {
  it('should count as valid', () => {
    const lines = ['11-16 l: llllqllllllllflq']

    expect(getCountByPosition(lines)).toBe(1)
  })

  it('should count as valid', () => {
    const lines = ['1-3 a: abcde']

    expect(getCountByPosition(lines)).toBe(1)
  })

  it('should count as invalid', () => {
    const lines = ['1-3 b: cdefg']

    expect(getCountByPosition(lines)).toBe(0)
  })

  it('should count as invalid', () => {
    const lines = ['2-9 c: ccccccccc']

    expect(getCountByPosition(lines)).toBe(0)
  })
})
