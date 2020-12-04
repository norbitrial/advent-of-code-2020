import getCountOfValidPass from './getCountOfValidPass'
import readByLines from '../helpers/readByLines'

const INPUT_FILE_PATH = 'src/day03/input.txt'

const run = async () => {
  const lines = await readByLines(INPUT_FILE_PATH)
  // imporvement TODO: read as text originally
  const input = lines.join('')

  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    fileLength: input.length,
  })

  const result = getCountOfValidPass(input)

  console.log(`Result ...`, result)

  console.log({ finishedAt: new Date() })
}

export default run
