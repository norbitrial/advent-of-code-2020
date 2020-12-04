import isValidPassport from './isValidPassport'

describe('isValidPassport', () => {
  it('should be valid because all eight fields are present', () => {
    const passport = {
      ecl: 'gry',
      pid: '860033327',
      eyr: '2020',
      hcl: '#fffffd',
      byr: '1937',
      iyr: '2017',
      cid: '147',
      hgt: '183cm',
    }

    expect(isValidPassport(passport)).toBe(true)
  })

  it('should be invalid it is missing hgt', () => {
    const passport = {
      iyr: '2013',
      ecl: 'amb',
      cid: '350',
      eyr: '2023',
      pid: '028048884',
      hcl: '#cfa07d',
      byr: '1929',
    }

    expect(isValidPassport(passport)).toBe(false)
  })

  it('should be valid only missing field is cid', () => {
    const passport = {
      hcl: '#ae17e1',
      iyr: '2013',
      eyr: '2024',
      ecl: 'brn',
      pid: '760753108',
      byr: '1931',
      hgt: '179cm',
    }

    expect(isValidPassport(passport)).toBe(true)
  })

  it('should be invalid missing two fields, cid and byr', () => {
    const passport = {
      hcl: '#cfa07d',
      eyr: '2025',
      pid: '166559648',
      iyr: '2011',
      ecl: 'brn',
      hgt: '59in',
    }

    expect(isValidPassport(passport)).toBe(false)
  })
})
