import getCharOccurrence from './helpers/getCharOccurrence'
import isValidPassword from './helpers/isValidPassword'

const RULE_AND_PASSWORD_SEPARATOR = ':'
const RULE_SEPARATOR = ' '
const NUMBER_SEPARATOR = '-'

const getCountOfValidPass = (lines: Array<string>): number =>
  lines.reduce((a, line, index) => {
    const [rule, password] = line.split(RULE_AND_PASSWORD_SEPARATOR)
    const [numbersBetween, char] = rule.split(RULE_SEPARATOR)
    const [smallest, biggest] = numbersBetween.split(NUMBER_SEPARATOR)
    const occurrence = getCharOccurrence(password, char)
    const isValid = isValidPassword(
      occurrence,
      parseInt(smallest),
      parseInt(biggest)
    )

    return isValid ? a + 1 : a
  }, 0)

export default getCountOfValidPass
