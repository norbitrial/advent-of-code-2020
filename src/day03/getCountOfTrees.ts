import hasTreeOn from './helpers/hasTreeOn'
import stepRight from './helpers/stepRight'

const getCountOfTrees = (
  lines: Array<string>,
  xSteps: number,
  ySteps: number
): number => {
  let treeCount = 0

  for (let x = 0, y = 0; y < lines.length - ySteps; ) {
    const currentLine = lines[y]

    x = stepRight(currentLine, x, xSteps)
    y = y + ySteps

    const nextLine = lines[y]

    if (hasTreeOn(nextLine, x)) {
      treeCount++
    }
  }

  return treeCount
}

export default getCountOfTrees
