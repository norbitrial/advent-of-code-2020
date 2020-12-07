type BagInfo = {
  amount: number
  color: string
}

const getBagInfo = (value: string): BagInfo => {
  const [amount, ...rest] = value.split(' ')
  let color = rest.join(' ')
  const indexOfBag = color.indexOf(' bag')
  color = color.substring(0, indexOfBag)
  let parsedAmount = parseInt(amount)
  parsedAmount = isNaN(parsedAmount) ? 0 : parsedAmount

  return {
    amount: parsedAmount,
    color,
  }
}

export default getBagInfo
