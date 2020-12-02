const RULE_AND_PASSWORD_SEPARATOR = ':'

const getCountOfValidPass = (lines: Array<string>): number =>
  lines.reduce((a, line, index) => {
    const [rule, password] = line.split(RULE_AND_PASSWORD_SEPARATOR)

    return a
  }, 0)

export default getCountOfValidPass
