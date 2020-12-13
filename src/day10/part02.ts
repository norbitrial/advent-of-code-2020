const part02 = (lines: Array<string>): number => {
  //const adapters = lines.map((e) => parseInt(e))
  const adapters = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4]
  const sortedAdapters = adapters.sort((a, b) => a - b)
  //const options: Array<Array<number>> = []
  console.log({ sortedAdapters })
  let unique = new Set<string>()

  sortedAdapters.forEach((jolt, index) => {
    console.log('elem', { jolt, index })

    // basic array
    // elemek set-bol kiparseolva
    const options: Array<Array<number>> = Array.from(unique).map((e) =>
      e.split(',').map((s) => parseInt(s))
    )
    //unique = new Set()

    if (index === 0) {
      options.push([jolt])
    }

    const plus1Jolt = sortedAdapters[index + 1]
    const plus2Jolt = sortedAdapters[index + 2]
    const plus3Jolt = sortedAdapters[index + 3]

    if (plus1Jolt - jolt === 1) {
      console.log('works 1')

      // basic arrays foreach
      // if last elem of array < current elem to push
      // basic array => push
      options.forEach((e) => push(e, jolt))
    }

    if (plus2Jolt - jolt === 2) {
      console.log('works 2')

      // basic arrays foreach
      // if last elem of array < current elem to push
      // basic array => push
      options.forEach((e) => push(e, jolt))
    }

    if (plus3Jolt - jolt === 3) {
      console.log('works 3')

      // basic arrays foreach
      // if last elem of array < current elem to push
      // basic array => push
      options.forEach((e) => push(e, jolt))
    }

    // basic arrays foreach
    // basic array elemei => join(',') => set-be, hogy unique legyen
    options.forEach((e) => unique.add(e.join(',')))
  })

  Array.from(unique).forEach((e, i) => console.log('final elem', { i, e }))

  return unique.size

  /*let possibility = 0

  sortedAdapters.forEach((jolt, index) => {
    let counter = 0
    console.log('elem', { jolt, index })

    const plus1Jolt = sortedAdapters[index + 1]
    const plus2Jolt = sortedAdapters[index + 2]
    const plus3Jolt = sortedAdapters[index + 3]

    if (plus1Jolt - jolt === 1) {
      console.log('works 1')
      counter++
    }

    if (plus2Jolt - jolt === 2) {
      //      options++
      counter++
    }

    if (plus3Jolt - jolt === 3) {
      //options++
      counter++
    }

    if (counter >= 2) {
      possibility++
    }
    //options.push(elems)
  })

  return Math.pow(2, possibility)*/
}

const push = (array: Array<number>, jolt: number) => {
  if (array[array.length - 1] < jolt) {
    array.push(jolt)
  }
}

// That's not the right answer; your answer is too high. If you're stuck, make sure you're using the full input data; there are also some general tips on the about page, or you can ask for hints on the subreddit. Please wait one minute before trying again.
// (You guessed 666334875701477400.)
// That's not the right answer; your answer is too high. If you're stuck, make sure you're using the full input data; there are also some general tips on the about page, or you can ask for hints on the subreddit. Please wait one minute before trying again.
// (You guessed 35184372088832.)
//              1000000000000000

export default part02
