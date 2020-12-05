const getHighestSeatId = (seatIds: Array<number>): number =>
  seatIds.sort((prevId: number, nextId: number) => prevId - nextId)[
    seatIds.length - 1
  ]

export default getHighestSeatId
