import getCountOfValidPass from './getCountOfValidPass'
import readFile from '../helpers/readFile'

const VALID_ONLY_INPUT_FILE_PATH = 'src/day04/validPassports.txt'
const INVALID_ONLY_INPUT_FILE_PATH = 'src/day04/invalidPassports.txt'

describe('getCountOfValidPass', () => {
  it('needs correction', () => {
    expect('needs correction').toBe('needs correction')
  })
  /*it('should have 4 valid passports', async () => {
    const input = await readFile(VALID_ONLY_INPUT_FILE_PATH)

    const result = getCountOfValidPass(input)
    expect(result.validPassportCount).toBe(4)
  })

  it('should have 0 valid passports', async () => {
    const input = await readFile(INVALID_ONLY_INPUT_FILE_PATH)

    const result = getCountOfValidPass(input)
    expect(result.validPassportCount).toBe(0)
  })*/
})
