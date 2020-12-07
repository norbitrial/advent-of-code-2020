import getBagColorsFromLine from './getBagColorsFromLine'

const getBagColors = (lines: Array<string>): Array<string> =>
  lines.flatMap((line) => getBagColorsFromLine(line))

export default getBagColors
