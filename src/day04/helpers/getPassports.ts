import { sep } from 'path'
import CONSTS from '../consts'

const getPassports = (input: string, separator: string): Array<string> => {
  const newLineGlobalRegex = /(\r\n)/g
  const starGlobalRegex = /\*/g
  const raw = input.replace(newLineGlobalRegex, separator)
  const doubleSeparator = `${separator}${separator}`
  const passportWithStars = raw.split(doubleSeparator)

  return passportWithStars.map((passport: string) =>
    passport.replace(starGlobalRegex, CONSTS.PASSPORT_KEY_SEPARATOR)
  )
}

export default getPassports
