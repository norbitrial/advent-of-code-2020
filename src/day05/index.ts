import readByLines from '../helpers/readByLines'
import getHighestSeatId from './helpers/getHighestSeatId'
import getMissingSeatId from './helpers/getMissingSeatId'
import getTransformedSeatInfo from './helpers/getTransformedSeatInfo'

const INPUT_FILE_PATH = 'src/day05/input.txt'

const run = async () => {
  const input = await readByLines(INPUT_FILE_PATH)

  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    fileLength: input.length,
  })

  const seatInfoList = getTransformedSeatInfo(input)
  const seatIds = seatInfoList.map((e) => e.id)
  const highestSeatId = getHighestSeatId(seatIds)

  console.log('Result ...', { highestSeatId })
  console.log({ finishedAt: new Date() })

  const missingSeatId = getMissingSeatId(seatIds)

  console.log('Result ...', { missingSeatId })

  console.log({ finishedAt: new Date() })
}

export default run
