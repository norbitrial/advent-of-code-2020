import { createInterface } from 'readline'
import { createReadStream } from 'fs'

const run = () => {
  const nums = []

  const fileStream = createReadStream('src/day01/input.txt')
  const lineReader = createInterface({
    input: fileStream,
  })

  const onLineRead = (line) => nums.push(line)

  lineReader.on('line', onLineRead)
  lineReader.on('close', () => {
    const requiredSum = 2020
    let solutionTwoDays = {}
    let solutionThreeDays = {}

    nums.forEach((numFirst) => {
      nums.forEach((numSecond) => {
        const result = parseInt(numFirst) + parseInt(numSecond)

        if (result === requiredSum) {
          solutionTwoDays = {
            numFirst,
            numSecond,
            finalSolution: parseInt(numFirst) * parseInt(numSecond),
          }
        }

        nums.forEach((thirdNum) => {
          const result =
            parseInt(numFirst) + parseInt(numSecond) + parseInt(thirdNum)

          if (result === requiredSum) {
            solutionThreeDays = {
              numFirst,
              numSecond,
              thirdNum,
              finalSolution:
                parseInt(numFirst) * parseInt(numSecond) * parseInt(thirdNum),
            }
          }
        })
      })
    })

    console.log('Result:', {
      solutionTwoDays,
      solutionThreeDays,
    })
  })
}

export default run
