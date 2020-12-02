const isValidPassword = (
  occurrence: number,
  smallest: number,
  biggest: number
): boolean => smallest <= occurrence && biggest >= occurrence

export default isValidPassword
