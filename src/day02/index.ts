import readByLines from '../helpers/readByLines'
import getCountByPosition from './getCountByPosition'
import getCountOfValidPass from './getCountOfValidPass'

const INPUT_FILE_PATH = 'src/day02/input.txt'

const run = async () => {
  const lines = await readByLines(INPUT_FILE_PATH)

  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    linesLength: lines.length,
  })

  const result = getCountOfValidPass(lines)

  console.log(`Count of valid password from input is ${result} by old rule.`)

  console.log({ finishedAt: new Date() })

  const resultByPosition = getCountByPosition(lines)

  console.log(
    `Count of valid password from input is ${resultByPosition} by position rule.`
  )

  console.log({ finishedAt: new Date() })
}

export default run
