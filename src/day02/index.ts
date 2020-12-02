import readByLines from '../helpers/readByLines'
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

  console.log(`Count of valid password from input is ${result}.`)

  console.log({ finishedAt: new Date() })
}

export default run
