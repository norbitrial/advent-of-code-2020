import { createReadStream } from 'fs'
import { createInterface } from 'readline'

const readByLines = async (filePath: string): Promise<Array<string>> => {
  const fileStream = createReadStream(filePath)
  const lineReader = createInterface({
    input: fileStream,
  })
  const lines: Array<string> = []

  const onLineRead = (line) => lines.push(line)

  lineReader.on('line', onLineRead)

  return new Promise((resolve) => {
    lineReader.on('close', () => resolve(lines))
  })
}

export default readByLines
