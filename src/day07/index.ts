import readByLines from '../helpers/readByLines'
import getBagColorsCount from './helpers/getBagColorsCount'

const INPUT_FILE_PATH = 'src/day07/input.txt'

const run = async () => {
  const input = await readByLines(INPUT_FILE_PATH)

  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    fileLength: input.length,
  })

  const result = getBagColorsCount(input)

  console.log('Result ...', { result })
  console.log({ finishedAt: new Date() })
}

export default run
