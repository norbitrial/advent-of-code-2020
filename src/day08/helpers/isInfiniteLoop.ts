const SPACE = ' '

const isInfiniteLoop = (instructionList: Array<string>): boolean => {
  const alreadyTriedSteps = new Set()
  let index = 0
  let stepsCount = 0

  while (true) {
    if (index >= instructionList.length) {
      return false
    }

    const [action, value] = instructionList[index].split(SPACE)

    if (alreadyTriedSteps.has(index)) {
      return stepsCount !== instructionList.length - 1
    }

    alreadyTriedSteps.add(index)

    if (action === 'jmp') {
      index = index + parseInt(value)
    } else {
      index++
    }

    stepsCount++
  }
}

export default isInfiniteLoop
