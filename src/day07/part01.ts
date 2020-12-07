import getBagColorsCount from './helpers/getBagColorsCount'

const part01 = (lines: Array<string>): number => {
  const currentColor = 'shiny gold'

  const colors = new Set<string>([])
  getBagColorsCount(lines, currentColor, colors)

  return Array.from(colors).length
}

export default part01
