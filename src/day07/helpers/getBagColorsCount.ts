const SENTENCE_SEPARATOR = ' bags contain '

const getBagColorsCount = (
  lines: Array<string>,
  startColor: string,
  colors: Set<string>
): void => {
  let currentColor = startColor

  lines.forEach((sentence: string, index: number) => {
    const [nextColor, rightPartOfSentence] = sentence.split(SENTENCE_SEPARATOR)
    const isRelevantColor = rightPartOfSentence.indexOf(currentColor) !== -1

    if (isRelevantColor) {
      colors.add(nextColor)
      getBagColorsCount(lines, nextColor, colors)
    }
  })
}

export default getBagColorsCount
