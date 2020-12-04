import fields from '../fields.enum'
import KeyValue from '../keyValue.type'
import hasRequiredFields from './hasRequiredFields'

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
export const isBirthYearValid = (value: string): boolean => {
  if (value.length !== 4) return false
  const year = parseInt(value)

  return year >= 1920 && year <= 2002
}

// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
export const isIssueYearValid = (value: string): boolean => {
  if (value.length !== 4) return false
  const year = parseInt(value)

  return year >= 2010 && year <= 2020
}

// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
export const isExpirationYearValid = (value: string): boolean => {
  if (value.length !== 4) return false
  const year = parseInt(value)

  return year >= 2020 && year <= 2030
}

// hgt (Height) - a number followed by either cm or in:
//  If cm, the number must be at least 150 and at most 193.
//  If in, the number must be at least 59 and at most 76.
export const isHeightValid = (value: string): boolean => {
  const inch = 'in'
  const cm = 'cm'
  const isInch = value.indexOf(inch) !== -1
  const isCm = value.indexOf(cm) !== -1

  if (!isInch && !isCm) return false

  const replaceText = isInch ? inch : cm

  const height = parseInt(value.replace(replaceText, ''))

  return (
    (isInch && 59 <= height && 76 >= height) ||
    (isCm && height >= 150 && height <= 193)
  )
}

// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
export const isHairColorValid = (color: string): boolean => {
  if (color.length === 7) {
    const hasHashTag = color.indexOf('#') === 0

    if (hasHashTag) {
      const regexp = new RegExp(/^[a-f0-9]+$/i)
      const colorWithoutHashTag = color.slice(1, color.length)

      return hasHashTag && regexp.test(colorWithoutHashTag)
    }
  }

  return false
}

// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
export const isEyeColorValid = (color: string): boolean =>
  new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']).has(color)

// pid (Passport ID) - a nine-digit number, including leading zeroes.
export const isPIDValid = (pid: string): boolean => {
  return pid.length === 9 && !isNaN(parseInt(pid))
}

const isValidPassport = (passportHashMap: KeyValue): boolean =>
  hasRequiredFields(passportHashMap) &&
  isBirthYearValid(passportHashMap[fields.BYR]) &&
  isIssueYearValid(passportHashMap[fields.IYR]) &&
  isExpirationYearValid(passportHashMap[fields.EYR]) &&
  isHeightValid(passportHashMap[fields.HGT]) &&
  isHairColorValid(passportHashMap[fields.HCL]) &&
  isEyeColorValid(passportHashMap[fields.ECL]) &&
  isPIDValid(passportHashMap[fields.PID])

export default isValidPassport
