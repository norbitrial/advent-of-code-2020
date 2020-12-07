import getBagColorsCount from './helpers/getBagColorsCount'

const part01 = (lines: Array<string>): number => {
  const startColor = 'shiny gold'

  const colors = new Set<string>([])
  getBagColorsCount(lines, startColor, colors)

  return colors.size
}

export default part01
