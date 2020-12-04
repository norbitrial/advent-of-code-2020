import readFile from '../helpers/readFile'

const INPUT_FILE_PATH = 'src/day05/input.txt'

const run = async () => {
  const input = await readFile(INPUT_FILE_PATH)

  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    fileLength: input.length,
  })

  const result = undefined

  console.log(`Result ...`, result)

  console.log({ finishedAt: new Date() })
}

export default run
