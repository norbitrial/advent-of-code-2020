type Result = {
  numFirst: number
  numSecond: number
  numThird: number
  multiplied: number
}

const findThreeSum = (lines: Array<string>, requiredSum: number): Result => {
  let solution: Result = {
    numFirst: 0,
    numSecond: 0,
    numThird: 0,
    multiplied: 0,
  }

  lines.forEach((numFirst) => {
    lines.forEach((numSecond) => {
      lines.forEach((thirdNum) => {
        const result =
          parseInt(numFirst) + parseInt(numSecond) + parseInt(thirdNum)

        if (result === requiredSum) {
          solution = {
            numFirst: parseInt(numFirst),
            numSecond: parseInt(numSecond),
            numThird: parseInt(thirdNum),
            multiplied:
              parseInt(numFirst) * parseInt(numSecond) * parseInt(thirdNum),
          }
        }
      })
    })
  })

  return solution
}

export default findThreeSum
