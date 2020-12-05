import getHighestSeatId from './getHighestSeatId'

describe('getHighestSeatId', () => {
  const seatIds = [230, 1, 250, 178]

  it('should return 250 as highest number in array', () => {
    expect(getHighestSeatId(seatIds)).toBe(250)
  })
})
