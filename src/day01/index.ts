import readByLines from '../helpers/readByLines'
import findThreeSum from './findThreeSum'
import findTwoSum from './findTwoSum'

const INPUT_FILE_PATH = 'src/day01/input.txt'

const run = async () => {
  const lines = await readByLines(INPUT_FILE_PATH)
  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    linesLength: lines.length,
  })

  const requiredSum = 2020
  const numbers = lines.map((e) => parseInt(e))
  const resultTwoSum = findTwoSum(requiredSum, numbers)

  console.log('Result of findTwoSum ...', resultTwoSum)
  console.log({ finishedAt: new Date() })

  const result = findThreeSum(lines, requiredSum)

  console.log('Result of threeSum ...', result)

  console.log('end', { end: new Date() })
}

export default run
