const part01 = (linesWithSeparator: Array<string>, separator: string): number =>
  linesWithSeparator
    .map((e) => {
      const groupsList = e.split(separator)
      const allCharsFromGroup = groupsList.join('')
      const uniqueChars = Array.from(new Set(allCharsFromGroup))
      return uniqueChars.length
    })
    .reduce((a, c) => a + c, 0)

export default part01
