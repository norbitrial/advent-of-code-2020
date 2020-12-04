import KeyValue from '../keyValue.type'

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']
const exception = 'cid'

const isValidPassport = (passportHashMap: KeyValue): boolean =>
  requiredFields.every(
    (key: string) => key === exception || passportHashMap[key]
  )

export default isValidPassport
