import isInfiniteLoop from './helpers/isInfiniteLoop'
import part01 from './part01'

type Instruction = {
  instruction: string
  index: number
}

const part02 = (instructionList: Array<string>): number => {
  let correctInstructionList: Array<string> = []

  const instructionListOptions: Array<Instruction> = []
  instructionList.forEach((instruction: string, index: number) => {
    if (
      instruction !== 'nop +0' &&
      (instruction.indexOf('nop') !== -1 || instruction.indexOf('jmp') !== -1)
    ) {
      instructionListOptions.push({
        instruction,
        index,
      })
    }
  })

  for (let i = 0; i < instructionListOptions.length; i++) {
    const array = [...instructionList]
    const index = instructionListOptions[i].index
    const value = array[index]

    if (value.indexOf('nop') !== -1) {
      array[index] = value.replace('nop', 'jmp')
    } else {
      array[index] = value.replace('jmp', 'nop')
    }

    if (!isInfiniteLoop(array)) {
      correctInstructionList = array
      break
    }
  }

  return correctInstructionList.length > 0 ? part01(correctInstructionList) : 0
}

export default part02
