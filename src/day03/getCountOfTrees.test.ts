import getCountOfTrees from './getCountOfTrees'

describe('getCountOfTrees', () => {
  const lines: Array<string> = ['..##.......', '#...#...#..', '.#....#..#.']
  const xSteps = 3
  const ySteps = 1

  it('should', () => {
    expect(getCountOfTrees(lines, xSteps, ySteps)).toBe(1)
  })
})
