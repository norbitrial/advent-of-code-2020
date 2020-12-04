import fields from '../fields.enum'
import KeyValue from '../keyValue.type'

const requiredFields = [
  fields.BYR,
  fields.IYR,
  fields.EYR,
  fields.HGT,
  fields.HCL,
  fields.ECL,
  fields.PID,
  fields.CID,
]
const exception = 'cid'

const hasRequiredFields = (passportHashMap: KeyValue): boolean =>
  requiredFields.every(
    (key: string) => key === exception || passportHashMap[key]
  )

export default hasRequiredFields
