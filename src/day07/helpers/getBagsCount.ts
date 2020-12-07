import getBagInfo from './getBagInfo'
import removeDots from './removeDots'

const SENTENCE_SEPARATOR = ' bags contain '
const BAGS_SEPARATOR = ', '

type Counter = {
  count: number
}

const getBagsCount = (
  lines: Array<string>,
  currentColor: string,
  counter: Counter
): void => {
  lines.forEach((sentence: string) => {
    const [nextColor, rightPartOfSentence] = sentence.split(SENTENCE_SEPARATOR)
    const isRelevantColor = nextColor === currentColor

    if (isRelevantColor) {
      removeDots(rightPartOfSentence)
        .split(BAGS_SEPARATOR)
        .forEach((nextColorWithAmount: string) => {
          const { amount, color } = getBagInfo(nextColorWithAmount)
          counter.count += amount

          Array.from(Array(amount), () => getBagsCount(lines, color, counter))
        })
    }
  })
}

export default getBagsCount
