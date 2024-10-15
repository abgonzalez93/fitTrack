import CreateNutritionistDto from '@dto/nutritionist/CreateNutritionistDto'
import { JSONSchemaType } from 'ajv'

const createNutritionistValidation: JSONSchemaType<CreateNutritionistDto> = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 3 },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 6 },
    clients: { type: 'array', items: { type: 'string' }, minItems: 0, }
  },
  required: ['name', 'email', 'password', 'clients'],
  additionalProperties: false,
}

export default createNutritionistValidation
