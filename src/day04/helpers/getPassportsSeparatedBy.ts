const getPassportsSeparatedBy = (input: string, separator: string): string => {
  //const regex = /(\n)+/g
  //const r = //input.replace(regex, newSeparator) //.replace(/  /g, '')

  /*return input
    .replace(/(\n)+/g, '')
    .replace(/    /g, separator)
    .replace(/  /g, ' ')*/

  const dikk = input.replace(/(\r\n)/g, separator)

  //.replace(/    /g, separator)
  //.replace(/  /g, ' ')
  //console.log({ dikk, separator })

  return dikk //input.replace(/(\r\n)+/g, separator)
}

export default getPassportsSeparatedBy
