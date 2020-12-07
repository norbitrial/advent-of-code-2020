import isValidPassport, {
  isBirthYearValid,
  isIssueYearValid,
  isExpirationYearValid,
  isEyeColorValid,
  isHairColorValid,
  isHeightValid,
  isPIDValid,
} from './isValidPassport'

describe(`isValidPassport's`, () => {
  describe('isBirthYearValid', () => {
    it('should return valid for 1988', () => {
      expect(isBirthYearValid('1988')).toBe(true)
    })

    it('should return valid for 1920', () => {
      expect(isBirthYearValid('1920')).toBe(true)
    })

    it('should return valid for 2002', () => {
      expect(isBirthYearValid('2002')).toBe(true)
    })

    it('should return invalid for 1919', () => {
      expect(isBirthYearValid('1919')).toBe(false)
    })

    it('should return invalid for 2003', () => {
      expect(isBirthYearValid('2003')).toBe(false)
    })

    it('should return invalid for 199', () => {
      expect(isBirthYearValid('199')).toBe(false)
    })
  })

  describe('isIssueYearValid', () => {
    it('should return valid for 1988', () => {
      expect(isIssueYearValid('1988')).toBe(false)
    })

    it('should return valid for 2009', () => {
      expect(isIssueYearValid('2009')).toBe(false)
    })

    it('should return valid for 2010', () => {
      expect(isIssueYearValid('2010')).toBe(true)
    })

    it('should return invalid for 2020', () => {
      expect(isIssueYearValid('2020')).toBe(true)
    })

    it('should return invalid for 2021', () => {
      expect(isIssueYearValid('2021')).toBe(false)
    })

    it('should return invalid for 199', () => {
      expect(isIssueYearValid('199')).toBe(false)
    })
  })

  describe('isExpirationYearValid', () => {
    it('should return valid for 1988', () => {
      expect(isExpirationYearValid('1988')).toBe(false)
    })

    it('should return valid for 2019', () => {
      expect(isExpirationYearValid('2019')).toBe(false)
    })

    it('should return valid for 2020', () => {
      expect(isExpirationYearValid('2020')).toBe(true)
    })

    it('should return invalid for 2030', () => {
      expect(isExpirationYearValid('2030')).toBe(true)
    })

    it('should return invalid for 2031', () => {
      expect(isExpirationYearValid('2031')).toBe(false)
    })

    it('should return invalid for 199', () => {
      expect(isExpirationYearValid('199')).toBe(false)
    })
  })

  describe('isHeightValid', () => {
    it('should return valid for 150cm', () => {
      expect(isHeightValid('150cm')).toBe(true)
    })

    it('should return valid for 193cm', () => {
      expect(isHeightValid('193cm')).toBe(true)
    })

    it('should return valid for 183cm', () => {
      expect(isHeightValid('183cm')).toBe(true)
    })

    it('should return valid for 149cm', () => {
      expect(isHeightValid('149cm')).toBe(false)
    })

    it('should return valid for 194cm', () => {
      expect(isHeightValid('194cm')).toBe(false)
    })

    it('should return valid for 59in', () => {
      expect(isHeightValid('59in')).toBe(true)
    })

    it('should return valid for 76in', () => {
      expect(isHeightValid('76in')).toBe(true)
    })

    it('should return valid for 70in', () => {
      expect(isHeightValid('70in')).toBe(true)
    })

    it('should return valid for 58in', () => {
      expect(isHeightValid('58in')).toBe(false)
    })

    it('should return valid for 77in', () => {
      expect(isHeightValid('77in')).toBe(false)
    })

    it('should return valid for 157', () => {
      expect(isHeightValid('157')).toBe(false)
    })
  })

  describe('isHairColorValid', () => {
    it('should return valid for #123abc', () => {
      expect(isHairColorValid('#123abc')).toBe(true)
    })

    it('should return invalid for #123abz', () => {
      expect(isHairColorValid('#123abz')).toBe(false)
    })

    it('should return invalid for 123abc', () => {
      expect(isHairColorValid('123abc')).toBe(false)
    })

    it('should return invalid for #c0946f', () => {
      expect(isHairColorValid('#c0946f')).toBe(true)
    })

    it('should return invalid for #c0946', () => {
      expect(isHairColorValid('#c0946')).toBe(false)
    })
  })

  describe('isEyeColorValid', () => {
    it('should return valid for wat', () => {
      expect(isEyeColorValid('brn')).toBe(true)
    })

    it('should return invalid for wat', () => {
      expect(isEyeColorValid('wat')).toBe(false)
    })
  })

  describe('isPIDValid', () => {
    it('should return valid for 000000001', () => {
      expect(isPIDValid('000000001')).toBe(true)
    })

    it('should return valid for 0123456789', () => {
      expect(isPIDValid('0123456789')).toBe(false)
    })

    it('should return valid for 3556412378', () => {
      expect(isPIDValid('3556412378')).toBe(false)
    })
  })

  describe('isValidPassport', () => {
    it('should return invalid for input', () => {
      const passport = {
        pid: '5253256652',
        byr: '2009',
        hgt: '152cm',
        iyr: '1989',
        eyr: '1968',
        hcl: '64cb63',
        ecl: 'hzl',
      }
      expect(isValidPassport(passport)).toBe(false)
    })

    it('should return valid for input', () => {
      const passport = {
        pid: '525325665',
        byr: '1988',
        hgt: '152cm',
        iyr: '2010',
        eyr: '2020',
        hcl: '#64cb63',
        ecl: 'hzl',
      }
      expect(isValidPassport(passport)).toBe(true)
    })
  })
})
