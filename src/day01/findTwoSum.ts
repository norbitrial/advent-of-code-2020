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

export default findTwoSum
