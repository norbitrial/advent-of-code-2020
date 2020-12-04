import KeyValue from './keyValue.type'
import isValidPassport from './helpers/isValidPassport'
import getPassports from './helpers/getPassports'
import CONSTS from './consts'
import isValidPassword from '../day02/helpers/isValidPassword'

const getCountOfValidPass = (input: string): number => {
  let validPassportCount = 0
  const passportList: Array<string> = getPassports(
    input,
    CONSTS.PASSPORT_NEW_SEPARATOR
  )
  console.log({ length: passportList.length })
  passportList.forEach((passport: string, index: number) => {
    const keyValues = passport.split(CONSTS.PASSPORT_KEY_SEPARATOR)

    const passportHashMap = keyValues.reduce((hashMap, keyValue) => {
      const [key, value] = keyValue.split(CONSTS.PASSPORT_KEY_VALUE_SEPARATOR)

      hashMap[key] = value

      return hashMap
    }, {} as KeyValue)

    const isValid = isValidPassport(passportHashMap)

    if (isValid) {
      validPassportCount++
    }
  })

  return validPassportCount
}

export default getCountOfValidPass
