import getCountOfValidPass from './getCountOfValidPass'

describe('getCountOfValidPass', () => {
  it('should count as valid', () => {
    const lines = ['11-16 l: llllqllllllllflq']

    expect(getCountOfValidPass(lines)).toBe(1)
  })

  it('should count as valid', () => {
    const lines = ['1-3 a: abcde']

    expect(getCountOfValidPass(lines)).toBe(1)
  })

  it('should count as invalid', () => {
    const lines = ['1-3 b: cdefg']

    expect(getCountOfValidPass(lines)).toBe(0)
  })

  it('should count as valid', () => {
    const lines = ['2-9 c: ccccccccc']

    expect(getCountOfValidPass(lines)).toBe(1)
  })
})
