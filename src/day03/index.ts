import readByLines from '../helpers/readByLines'
import getCountOfTrees from './getCountOfTrees'

const INPUT_FILE_PATH = 'src/day03/input.txt'

const run = async () => {
  const lines = await readByLines(INPUT_FILE_PATH)

  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    linesLength: lines.length,
  })

  const result = getCountOfTrees(lines, 3, 1)

  console.log(`Result ...`, result)

  console.log({ finishedAt: new Date() })

  const result_1_1 = getCountOfTrees(lines, 1, 1)
  const result_3_1 = getCountOfTrees(lines, 3, 1)
  const result_5_1 = getCountOfTrees(lines, 5, 1)
  const result_7_1 = getCountOfTrees(lines, 7, 1)
  const result_1_2 = getCountOfTrees(lines, 1, 2)

  console.log('Result ...', {
    result_1_1,
    result_3_1,
    result_5_1,
    result_7_1,
    result_1_2,
    multiplied: result_1_1 * result_3_1 * result_5_1 * result_7_1 * result_1_2,
  })

  console.log({ finishedAt: new Date() })
}

export default run
