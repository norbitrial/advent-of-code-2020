const getCharOccurrence = (text: string, char: string): number =>
  text.split('').filter((c) => c === char).length

export default getCharOccurrence
