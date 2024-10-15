import UpdateClientDto from '@dto/client/UpdateClientDto'
import { JSONSchemaType } from 'ajv'

const updateClientValidation: JSONSchemaType<UpdateClientDto> = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 3, nullable: true },
    email: { type: 'string', format: 'email', nullable: true },
    password: { type: 'string', minLength: 6, nullable: true },
    nutritionistId: { type: 'string', nullable: true },
    age: { type: 'number', minimum: 0, nullable: true },
    height: { type: 'number', minimum: 0, nullable: true },
    weight: { type: 'number', minimum: 0, nullable: true },
    goals: { type: 'string', nullable: true },
    activityLevel: { type: 'string', nullable: true },
  },
  required: [],
  additionalProperties: false,
}

export default updateClientValidation
