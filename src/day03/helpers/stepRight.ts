// naming => maybe class
const stepRight = (
  line: string,
  currentIndex: number,
  steps: number
): number => {
  const length = line.length
  const maxIndex = length - 1

  return currentIndex + steps > maxIndex
    ? currentIndex - length + steps
    : currentIndex + steps
}

export default stepRight
