import readFile from '../helpers/readFile'
import part01 from './quickAndDirty/part01'
import part02 from './quickAndDirty/part02'

const INPUT_FILE_PATH = 'src/day06/input.txt'

const run = async () => {
  const input = await readFile(INPUT_FILE_PATH)

  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    fileLength: input.length,
  })

  const separator = '*'
  const newLineGlobalRegex = /(\r\n)/g
  const raw = input.replace(newLineGlobalRegex, separator)
  const doubleSeparator = `${separator}${separator}`
  const linesWithSeparator = raw.split(doubleSeparator)

  const sumPart01 = part01(linesWithSeparator, separator)

  console.log('Result ...', { sumPart01 })

  const sumPart02 = part02(linesWithSeparator, separator)

  console.log('Result ...', { sumPart02 })

  console.log({ finishedAt: new Date() })
}

export default run
