import { JSONSchemaType } from 'ajv'
import Config from '@config/Config'

const configValidation: JSONSchemaType<Config> = {
  type: 'object',
  properties: {
    ALLOWED_ORIGINS: { type: 'array', items: { type: 'string' }, },
    BODY_LIMIT: { type: 'string' },
    DB_URI: { type: 'string' },
    JWT_SECRET_ACCESS: { type: 'string' },
    JWT_SECRET_REFRESH: { type: 'string' },
    JWT_EXPIRES_ACCESS: { type: 'integer' },
    JWT_EXPIRES_REFRESH: { type: 'integer' },
    NODE_ENV: { type: 'string', enum: ['development', 'production', 'test'] },
    PORT: { type: 'integer' },
    RATE_LIMIT_MAX: { type: 'integer' },
  },
  required: ['ALLOWED_ORIGINS', 'BODY_LIMIT', 'DB_URI', 'JWT_SECRET_ACCESS', 'JWT_SECRET_REFRESH', 'JWT_EXPIRES_ACCESS', 'JWT_EXPIRES_REFRESH', 'NODE_ENV', 'PORT', 'RATE_LIMIT_MAX'],
  additionalProperties: false,
}

export default configValidation
