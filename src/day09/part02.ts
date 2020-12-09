import part01 from './part01'

const part02 = (lines: Array<string>, length: number): number => {
  const invalidNumber = part01(lines, length)

  const listOfNumbers = lines
    .map((e) => parseInt(e))
    .filter((e) => e < invalidNumber)

  let winningArray = []
  let found = false

  for (let i = 0; i < listOfNumbers.length; i++) {
    let currentSum = 0
    winningArray = []

    for (let j = i; j < listOfNumbers.length; j++) {
      const currentNumber = listOfNumbers[j]
      winningArray.push(currentNumber)
      currentSum += currentNumber

      if (currentSum === invalidNumber) {
        found = true
        break
      } else if (currentSum > invalidNumber) {
        break
      }
    }

    if (found) {
      break
    }
  }

  return getEncryptionWeakness(winningArray)
}

const getEncryptionWeakness = (winningArray: Array<number>): number => {
  const sortedArray = winningArray.sort((a, b) => a - b)
  return sortedArray[0] + sortedArray[sortedArray.length - 1]
}

export default part02
