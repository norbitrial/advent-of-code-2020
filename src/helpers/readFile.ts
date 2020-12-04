import { Buffer } from 'buffer'
import { createReadStream } from 'fs'
import { createInterface } from 'readline'

const readFile = async (filePath: string): Promise<string> => {
  const fileStream = createReadStream(filePath)
  /*const lineReader = createInterface({
    input: fileStream,
  })*/
  const lines: Array<string> = []

  //const onLineRead = (line: string) => lines.push(line)

  //lineReader.on('line', onLineRead)

  const chunks:Array<string | Buffer> = []
  return new Promise((resolve, reject) => {
    fileStream.on('data', chunk => chunks.push(chunk))
    fileStream.on('error', reject)
    fileStream.on('end', () =>  resolve('resolved'))     /*resolve(Buffer.concat(chunks).toString('utf8'))*/
  })
}

export default readFile
