import { JSONSchemaType } from 'ajv'
import UserSchema from '@validations/user/UserSchema'

const userValidationSchema: JSONSchemaType<UserSchema> = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 3 },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 6 },
  },
  required: ['name', 'email', 'password'],
  additionalProperties: false,
}

export default userValidationSchema
