import readByLines from '../helpers/readByLines'
import getHighestSeatId from './helpers/getHighestSeatId'
import getTransformedSeatInfo from './helpers/getTransformedSeatInfo'

const INPUT_FILE_PATH = 'src/day05/input.txt'

const run = async () => {
  const input = await readByLines(INPUT_FILE_PATH)

  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    fileLength: input.length,
  })

  const seatIds = getTransformedSeatInfo(input).map((e) => e.id)
  const result = getHighestSeatId(seatIds)

  console.log(`Result ...`, result)

  console.log({ finishedAt: new Date() })
}

export default run
