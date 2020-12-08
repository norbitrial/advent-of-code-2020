const SPACE = ' '

const part01 = (instructionList: Array<string>): number => {
  let accumulator = 0
  const alreadyTriedSteps = new Set()
  let index = 0

  while (true) {
    const [action, value] = instructionList[index].split(SPACE)

    console.log({ action, value })

    if (alreadyTriedSteps.has(index)) {
      break
    }

    alreadyTriedSteps.add(index)

    if (action === 'acc') {
      accumulator = accumulator + parseInt(value)
    }

    if (action === 'jmp') {
      index = index + parseInt(value)
    } else {
      index++
    }
  }

  return accumulator
}

export default part01
