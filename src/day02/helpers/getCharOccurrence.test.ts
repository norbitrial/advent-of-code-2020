import getCharOccurrence from './getCharOccurrence'

describe('getCharOccurrence', () => {
  it('should return 0 for not found char', () => {
    const text = 'qwerty'
    const char = 'z'

    expect(getCharOccurrence(text, char)).toBe(0)
  })

  it('should return 1 for found char', () => {
    const text = 'abcdefgh'
    const char = 'c'

    expect(getCharOccurrence(text, char)).toBe(1)
  })

  it('should return 5 for found char', () => {
    const text = 'aaaaa'
    const char = 'a'

    expect(getCharOccurrence(text, char)).toBe(5)
  })

  it('should return 2 for found char', () => {
    const text = 'abab'
    const char = 'b'

    expect(getCharOccurrence(text, char)).toBe(2)
  })
})
