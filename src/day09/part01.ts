const part01 = (lines: Array<string>, length: number): number => {
  for (let i = 0; i < lines.length - length; i++) {
    const currentIndex = i + length
    const numberToCheck = parseInt(lines[currentIndex])
    const hashMap = new Set()

    for (let j = i; j < i + length - 1; j++) {
      hashMap.add(parseInt(lines[j]))
    }

    let has = false
    for (let j = i; j < i + length; j++) {
      const elem = parseInt(lines[j])
      const number = numberToCheck - elem

      if (hashMap.has(number)) {
        has = true
        break
      }
    }

    if (!has) {
      return numberToCheck
    }
  }

  return 0
}

export default part01
