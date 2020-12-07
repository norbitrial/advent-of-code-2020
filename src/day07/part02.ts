import getBagsCount from './helpers/getBagsCount'

const part02 = (lines: Array<string>): number => {
  const currentColor = 'shiny gold'

  const counter = { count: 0 }
  getBagsCount(lines, currentColor, counter)

  return counter.count
}

export default part02
