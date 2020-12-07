import part02 from '../day08/part02'
import part01 from '../day08/part01'
import readByLines from '../helpers/readByLines'

const INPUT_FILE_PATH = 'src/day08/input.txt'

const run = async () => {
  const input = await readByLines(INPUT_FILE_PATH)

  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    fileLength: input.length,
  })

  console.log('Result ...', { result: part01(input) })
  console.log({ finishedAt: new Date() })

  console.log('Result ...', { result: part02(input) })
  console.log({ finishedAt: new Date() })
}

export default run
