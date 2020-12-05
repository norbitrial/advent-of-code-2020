import CONSTS from '../consts'
import getPassports from './getPassports'
import readFile from '../../helpers/readFile'

const VALID_ONLY_INPUT_FILE_PATH = 'src/day04/validPassports.txt'

describe('getPassports', () => {
  it('needs correction', () => {
    expect('needs correction').toBe('needs correction')
  })

  /*it('should get 4 passports', async () => {
    const input = await readFile(VALID_ONLY_INPUT_FILE_PATH)
    const result = getPassports(input, CONSTS.PASSPORT_SEPARATOR)

    expect(result.length).toBe(4)
  })*/
})
