import CreateUserDto from '@dto/user/CreateUserDto'
import { JSONSchemaType } from 'ajv'

const createUserValidation: JSONSchemaType<CreateUserDto> = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 3 },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 6 },
    role: { type: 'string', enum: ['nutritionist', 'client'] },
    isActive: { type: 'boolean' },
  },
  required: ['name', 'email', 'password', 'role', 'isActive'],
  additionalProperties: false,
}

export default createUserValidation
