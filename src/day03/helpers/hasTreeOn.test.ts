import hasTreeOn from './hasTreeOn'

describe('hasTreeOn', () => {
  const line = '.#...#.......#...#...#.#.#.....' // length of 31

  it('should have no tree on zero position', () => {
    const position = 0

    expect(hasTreeOn(line, position)).toBe(false)
  })

  it('should find tree on first position', () => {
    const position = 1

    expect(hasTreeOn(line, position)).toBe(true)
  })

  it('should have no tree on last index', () => {
    const position = 30

    expect(hasTreeOn(line, position)).toBe(false)
  })
})
