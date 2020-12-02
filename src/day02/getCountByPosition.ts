import isValidPasswordByPosition from './helpers/isValidPasswordByPosition'

const RULE_AND_PASSWORD_SEPARATOR = ':'
const RULE_SEPARATOR = ' '
const NUMBER_SEPARATOR = '-'

const getCountByPosition = (lines: Array<string>): number =>
  lines.reduce((a, line) => {
    const [rule, password] = line.split(RULE_AND_PASSWORD_SEPARATOR)
    const [numbersBetween, char] = rule.split(RULE_SEPARATOR)
    const [first, second] = numbersBetween.split(NUMBER_SEPARATOR)
    const firstPosition = parseInt(first)
    const secondPosition = parseInt(second)

    const isValid = isValidPasswordByPosition(
      password.trim(),
      char,
      firstPosition,
      secondPosition
    )

    return isValid ? a + 1 : a
  }, 0)

export default getCountByPosition
