const getMissingSeatId = (seatIds: Array<number>): number =>
  seatIds.filter((e, i) => i !== 0 && seatIds[i - 1] - e !== -1)[0] - 1

export default getMissingSeatId
