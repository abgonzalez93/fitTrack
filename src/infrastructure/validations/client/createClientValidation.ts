import CreateClientDto from '@dto/client/CreateClientDto'
import { JSONSchemaType } from 'ajv'

const createClientValidation: JSONSchemaType<CreateClientDto> = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 3 },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 6 },
    nutritionistId: { type: 'string' },
    age: { type: 'number', minimum: 0 },
    height: { type: 'number', minimum: 0 },
    weight: { type: 'number', minimum: 0 },
    goals: { type: 'string' },
    activityLevel: { type: 'string' },
  },
  required: ['name', 'email', 'password', 'nutritionistId', 'age', 'height', 'weight', 'goals', 'activityLevel'],
  additionalProperties: false,
}

export default createClientValidation
