import getPassportsSeparatedBy from './getPassportsSeparatedBy'

const getPassports = (input: string, separator: string): Array<string> => {
  const raw = getPassportsSeparatedBy(input, separator)

  //return raw.split(separator)
  return raw.split('**').map((e) => e.replace(/\*/g, ' '))
}

export default getPassports
