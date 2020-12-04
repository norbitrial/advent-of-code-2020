import { Buffer } from 'buffer'
import { createReadStream } from 'fs'

const readFile = async (filePath: string): Promise<string> => {
  const fileStream = createReadStream(filePath)
  const chunks: any = [] // TODO: remove type any

  return new Promise((resolve, reject) => {
    fileStream.on('data', (chunk) => chunks.push(chunk))
    fileStream.on('error', reject)
    fileStream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
  })
}

export default readFile
