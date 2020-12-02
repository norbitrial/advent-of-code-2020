import isValidPassByPosition from './isValidPassByPosition'

describe('isValidPassByPosition', () => {
  it('should return false for not found', () => {
    const password = 'kkkdkkfd'

    expect(isValidPassByPosition(password, 'd', 1, 2)).toBe(false)
  })

  it('should return false for found on both positions', () => {
    const password = 'kkkdkkfd'

    expect(isValidPassByPosition(password, 'd', 4, 8)).toBe(false)
  })

  it('should return true for found on first position', () => {
    const password = 'kkkdkkfd'

    expect(isValidPassByPosition(password, 'd', 4, 6)).toBe(true)
  })

  it('should return true for found on second position', () => {
    const password = 'kkkdkkfd'

    expect(isValidPassByPosition(password, 'd', 5, 8)).toBe(true)
  })
})
