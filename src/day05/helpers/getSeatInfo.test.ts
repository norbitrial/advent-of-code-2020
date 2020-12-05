import getSeatInfo from './getSeatInfo'

describe('getSeatInfo', () => {
  it('should return 567 for test seatId', () => {
    const seatId = 'BFFFBBFRRR'

    expect(getSeatInfo(seatId).id).toBe(567)
  })

  it('should return 119 for test seatId', () => {
    const seatId = 'FFFBBBFRRR'

    expect(getSeatInfo(seatId).id).toBe(119)
  })

  it('should return 820 for test seatId', () => {
    const seatId = 'BBFFBBFRLL'

    expect(getSeatInfo(seatId).id).toBe(820)
  })

  it('should return 357 for test seatId', () => {
    const seatId = 'FBFBBFFRLR'

    expect(getSeatInfo(seatId).id).toBe(357)
  })
})
