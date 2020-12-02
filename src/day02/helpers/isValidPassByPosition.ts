const isValidPassByPosition = (
  password: string,
  char: string,
  firstPosition: number,
  secondPosition: number
): boolean => {
  const firstIndex = firstPosition - 1
  const secondIndex = secondPosition - 1
  const hasFirst = password[firstIndex] === char
  const hasSecond = password[secondIndex] === char

  if (hasFirst && hasSecond) {
    return false
  }

  return hasFirst || hasSecond
}

export default isValidPassByPosition
