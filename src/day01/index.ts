import readByLines from '../helpers/readByLines'

const INPUT_FILE_PATH = 'src/day01/input.txt'

const findTwoSum = (requiredSum: number, numbers: Array<number>) => {
  const hashMap = new Set(numbers)
  let lookingFor

  for (const number of numbers) {
    lookingFor = requiredSum - number

    if (hashMap.has(lookingFor)) {
      return {
        numberOne: number,
        numberTwo: lookingFor,
        multiplied: number * lookingFor,
      }
    }
  }
}

const run = async () => {
  const lines = await readByLines(INPUT_FILE_PATH)
  console.log('With the following options ...')
  console.log({
    startedAt: new Date(),
    linesLength: lines.length,
  })

  const requiredSum = 2020
  const numbers = lines.map((e) => parseInt(e))
  const resultTwoSum = findTwoSum(requiredSum, numbers)

  console.log('Result of findTwoSum ...', resultTwoSum)
  console.log({ finishedAt: new Date() })

  console.log('Slow ...', { start: new Date() })

  let solutionTwoDays = {}
  let solutionThreeDays = {}

  lines.forEach((numFirst) => {
    lines.forEach((numSecond) => {
      const result = parseInt(numFirst) + parseInt(numSecond)

      if (result === requiredSum) {
        solutionTwoDays = {
          numFirst,
          numSecond,
          finalSolution: parseInt(numFirst) * parseInt(numSecond),
        }
      }

      lines.forEach((thirdNum) => {
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

  console.log('end', { end: new Date() })
}

export default run
