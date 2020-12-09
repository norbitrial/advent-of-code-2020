import part02 from '../day09/part02'
import part01 from '../day09/part01'
import readByLines from '../helpers/readByLines'

const INPUT_FILE_PATH = 'src/day09/input.txt'

const run = async () => {
  const input = await readByLines(INPUT_FILE_PATH)

  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    fileLength: input.length,
  })

  const length = 25

  console.log('Result ...', { result: part01(input, length) })
  console.log({ finishedAt: new Date() })

  console.log('Result ...', { result: part02(input, length) })
  console.log({ finishedAt: new Date() })
}

export default run
