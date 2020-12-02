import isValidPassword from './isValidPassword'

describe('getCountOfValidPass', () => {
  it('should return true for 5, 5, 10', () => {
    const occurence = 5
    const smallest = 5
    const biggest = 10

    expect(isValidPassword(occurence, smallest, biggest)).toBe(true)
  })

  it('should return true for 9, 4, 9', () => {
    const occurence = 9
    const smallest = 4
    const biggest = 9

    expect(isValidPassword(occurence, smallest, biggest)).toBe(true)
  })

  it('should return false for 3, 4, 9', () => {
    const occurence = 3
    const smallest = 4
    const biggest = 9

    expect(isValidPassword(occurence, smallest, biggest)).toBe(false)
  })

  it('should return false for 10, 4, 9', () => {
    const occurence = 10
    const smallest = 4
    const biggest = 9

    expect(isValidPassword(occurence, smallest, biggest)).toBe(false)
  })
})
