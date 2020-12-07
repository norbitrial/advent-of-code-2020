import getBagColorsCount from './getBagColorsCount'

describe('getBagColorsCount', () => {
  it('should return 0 for the input', () => {
    const input: Array<string> = []
    const colors = new Set<string>([])

    getBagColorsCount(input, 'shiny gold', colors)
    expect(colors.size).toBe(0)
  })

  it('should return 1 for the input', () => {
    const input = ['bright white bags contain 1 shiny gold bag.']
    const colors = new Set<string>([])

    getBagColorsCount(input, 'shiny gold', colors)
    expect(colors.size).toBe(1)
  })

  it('should return 1 for the input', () => {
    const input = [
      'bright white bags contain 1 shiny gold bag.',
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
    ]
    const colors = new Set<string>([])

    getBagColorsCount(input, 'shiny gold', colors)
    expect(colors.size).toBe(1)
  })

  it('should return 4 for the input', () => {
    const input = [
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
      'bright white bags contain 1 shiny gold bag.',
      'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
      'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
      'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
      'faded blue bags contain no other bags.',
      'dotted black bags contain no other bags.',
    ]

    const colors = new Set<string>([])

    getBagColorsCount(input, 'shiny gold', colors)
    expect(colors.size).toBe(4)
  })

  it('should', () => {
    const input = [
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
      'small yellow bags contain 3 bright white bags, 4 muted yellow bags.',
      'bright white bags contain 1 shiny gold bag.',
      'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
      'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
      'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
      'faded blue bags contain no other bags.',
      'dotted black bags contain no other bags.',
    ]
    const colors = new Set<string>([])

    getBagColorsCount(input, 'shiny gold', colors)
    expect(colors.size).toBe(5)
  })
})
