import { JSONSchemaType } from 'ajv'
import logger from '@logging/logger'
import Ajv from 'ajv'

const ajv = new Ajv()

const validate = <T>(schema: JSONSchemaType<T>, data: T): boolean => {
  const validateSchema = ajv.compile(schema)
  const valid = validateSchema(data)

  if (!valid) {
    const errorMessage = `Validation failed: ${JSON.stringify(validateSchema.errors)}`
    logger.error(errorMessage)
    throw new Error(errorMessage)
  }

  return valid
}

export default validate
