import { JSONSchemaType } from 'ajv'
import logger from '@logging/logger'
import Ajv from 'ajv'

const validate = <T>(schema: JSONSchemaType<T>, data: T): boolean => {
  const ajv = new Ajv()
  const valid = ajv.validate(schema, data)

  if (!valid) {
    logger.error(`Validation failed: ${JSON.stringify(ajv.errors)}`)
    throw new Error(`Validation failed: ${JSON.stringify(ajv.errors)}`);
  }

  return valid
}

export default validate
