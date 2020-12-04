import KeyValue from './keyValue.type'
import isValidPassport from './helpers/isValidPassport'
import getPassports from './helpers/getPassports'
import CONSTS from './consts'
import hasRequiredFields from './helpers/hasRequiredFields'

type ValidResult = {
  passportsCount: number
  hasAllRequiredFieldCount: number
  validPassportCount: number
}

const getCountOfValidPass = (input: string): ValidResult => {
  let hasAllRequiredFieldCount = 0
  let validPassportCount = 0
  const passportList: Array<string> = getPassports(
    input,
    CONSTS.PASSPORT_SEPARATOR
  )

  passportList.forEach((passport: string, index: number) => {
    const keyValues = passport.split(CONSTS.PASSPORT_KEY_SEPARATOR)

    const passportHashMap = keyValues.reduce((hashMap, keyValue) => {
      const [key, value] = keyValue.split(CONSTS.PASSPORT_KEY_VALUE_SEPARATOR)

      hashMap[key] = value

      return hashMap
    }, {} as KeyValue)

    const hasAllRequiredFields = hasRequiredFields(passportHashMap)
    const isValid = isValidPassport(passportHashMap)

    if (hasAllRequiredFields) {
      hasAllRequiredFieldCount++
    }

    if (isValid) {
      validPassportCount++
    }
  })

  return {
    passportsCount: passportList.length,
    hasAllRequiredFieldCount,
    validPassportCount,
  }
}

export default getCountOfValidPass
