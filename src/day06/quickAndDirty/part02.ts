const part02 = (linesWithSeparator: Array<string>, separator: string): number =>
  linesWithSeparator
    .map((e) => {
      const groupsList = e.split(separator)
      const allCharsFromGroup = groupsList.join('')
      const uniqueChars = Array.from(new Set(allCharsFromGroup))
      return uniqueChars.reduce(
        (a, char) =>
          groupsList.every((lineInGroup) => lineInGroup.indexOf(char) !== -1)
            ? a + 1
            : a,
        0
      )
    })
    .reduce((a, c) => a + c, 0)

export default part02
