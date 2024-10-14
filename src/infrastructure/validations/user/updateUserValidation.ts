import UpdateUserDto from '@dto/user/UpdateUserDto'
import { JSONSchemaType } from 'ajv'

const updateUserValidation: JSONSchemaType<UpdateUserDto> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string', minLength: 3, nullable: true },
    email: { type: 'string', format: 'email', nullable: true },
    password: { type: 'string', minLength: 6, nullable: true },
    isActive: { type: 'boolean', nullable: true },
  },
  required: ['id'],
  additionalProperties: false,
}

export default updateUserValidation
