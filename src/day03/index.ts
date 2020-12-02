import readByLines from '../helpers/readByLines'

const INPUT_FILE_PATH = 'src/day03/input.txt'

const run = async () => {
  const lines = await readByLines(INPUT_FILE_PATH)

  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    linesLength: lines.length,
  })

  const result = undefined

  console.log(`Result ...`, result)

  console.log({ finishedAt: new Date() })
}

export default run
