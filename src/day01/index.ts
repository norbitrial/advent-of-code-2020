import readByLines from '../helpers/readByLines'

const INPUT_FILE_PATH = 'src/day01/input.txt'

const run = async () => {
  const nums = await readByLines(INPUT_FILE_PATH)
  console.log('With the following input ...', nums)

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
}

export default run
