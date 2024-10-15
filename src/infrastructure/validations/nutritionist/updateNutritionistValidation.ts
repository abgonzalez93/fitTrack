import UpdateNutritionistDto from '@dto/nutritionist/UpdateNutritionistDto'
import { JSONSchemaType } from 'ajv'

const updateNutritionistValidation: JSONSchemaType<UpdateNutritionistDto> = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 3, nullable: true },
    email: { type: 'string', format: 'email', nullable: true },
    password: { type: 'string', minLength: 6, nullable: true },
    isActive: { type: 'boolean', nullable: true },
    clients: { type: 'array', items: { type: 'string' }, nullable: true, }
  },
  required: [],
  additionalProperties: false,
}

export default updateNutritionistValidation
