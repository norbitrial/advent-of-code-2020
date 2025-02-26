import { SeatInfo } from './types'

// BFFFBBFRRR: row 70, column 7, seat ID 567.
// FFFBBBFRRR: row 14, column 7, seat ID 119.
// BBFFBBFRLL: row 102, column 4, seat ID 820.
// where F means "front", B means "back", L means "left", and R means "right"
const getSeatInfo = (line: string): SeatInfo => {
  const splitByChars = line.split('')
  let lowestRow = 0
  let currentRow = 127
  let lengthHalf = 128

  let lowestSeat = 0
  let currentSeat = 7
  let widthHalf = 8

  splitByChars.forEach((char: string, index: number) => {
    if (index < 7) {
      lengthHalf = lengthHalf / 2

      if (char === 'B') {
        lowestRow = lowestRow + lengthHalf
      } else {
        currentRow = lowestRow + lengthHalf - 1
      }
    } else {
      widthHalf = widthHalf / 2

      if (char === 'R') {
        lowestSeat = lowestSeat + widthHalf
      } else {
        currentSeat = lowestSeat + widthHalf - 1
      }
    }
  })

  return {
    row: currentRow,
    column: currentSeat,
    id: currentRow * 8 + currentSeat,
  }
}

export default getSeatInfo
