import getMissingSeatId from './getMissingSeatId'

describe('getMissingSeatId', () => {
  it('should find 5 from array', () => {
    const seatIds = [1, 2, 3, 4, 6, 7, 8, 9, 10]

    expect(getMissingSeatId(seatIds)).toBe(5)
  })

  it('should find 548 from array', () => {
    const seatIds = [541, 542, 543, 544, 545, 546, 547, 549, 550]

    expect(getMissingSeatId(seatIds)).toBe(548)
  })
})
