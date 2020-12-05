import getSeatInfo, { SeatInfo } from './getSeatInfo'

const getTransformedSeatInfo = (lines: Array<string>): Array<SeatInfo> =>
  lines.map(getSeatInfo)

export default getTransformedSeatInfo
