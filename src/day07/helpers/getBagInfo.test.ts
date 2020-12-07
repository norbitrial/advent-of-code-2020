import getBagInfo from './getBagInfo'

describe('getBagInfo', () => {
  it('should return return 3 and faded blue for the input', () => {
    const info = getBagInfo('3 faded blue bags')

    expect(info.amount).toBe(3)
    expect(info.color).toBe('faded blue')
  })
})
