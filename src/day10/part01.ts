const part01 = (lines: Array<string>): number => {
  const adapters = lines.map((e) => parseInt(e))
  const sortedAdapters = adapters.sort((a, b) => a - b)
  let oneCount = 1 // start from 0
  let threeCount = 1 // last elem

  sortedAdapters.forEach((jolt, index) => {
    const nextJolt = sortedAdapters[index + 1]

    if (index !== sortedAdapters.length - 1) {
      const diff = nextJolt - jolt

      if (diff === 1) {
        oneCount++
      } else if (diff === 3) {
        threeCount++
      }
    }
  })

  return oneCount * threeCount
}

export default part01
