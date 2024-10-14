interface CreateUserDto {
  name: string
  email: string
  password: string
  role: 'nutritionist' | 'client',
  isActive: boolean
}

export default CreateUserDto
