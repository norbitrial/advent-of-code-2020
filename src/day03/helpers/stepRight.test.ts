import stepRight from './stepRight'

describe('stepRight', () => {
  const line = '.#...#.......#...#...#.#.#.....' // length of 31

  it('should step to the 3rd position', () => {
    const currentPosition = 0
    const steps = 3

    expect(stepRight(line, currentPosition, steps)).toBe(3)
  })

  it('should step to the 6th position', () => {
    const currentPosition = 3
    const steps = 3

    expect(stepRight(line, currentPosition, steps)).toBe(6)
  })

  it('should step back to the zero position', () => {
    const currentPosition = 28
    const steps = 3

    expect(stepRight(line, currentPosition, steps)).toBe(0)
  })

  it('should step to the first position', () => {
    const currentPosition = 29
    const steps = 3

    expect(stepRight(line, currentPosition, steps)).toBe(1)
  })

  it('should step to the forth position', () => {
    const currentPosition = 25
    const steps = 10

    expect(stepRight(line, currentPosition, steps)).toBe(4)
  })
})
