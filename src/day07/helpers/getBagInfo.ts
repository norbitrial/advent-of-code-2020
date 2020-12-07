const BAG = ' bag'
const SPACE = ' '

type BagInfo = {
  amount: number
  color: string
}

const getBagInfo = (value: string): BagInfo => {
  const [amount, ...rest] = value.split(SPACE)
  const color = rest.join(SPACE)
  const indexOfBag = color.indexOf(BAG)
  const parsedAmount = parseInt(amount)

  return {
    amount: isNaN(parsedAmount) ? 0 : parsedAmount,
    color: color.substring(0, indexOfBag),
  }
}

export default getBagInfo
