import getSeatInfo from './getSeatInfo'
import { SeatInfo } from './types'

const getTransformedSeatInfo = (lines: Array<string>): Array<SeatInfo> =>
  lines.map(getSeatInfo)

export default getTransformedSeatInfo
