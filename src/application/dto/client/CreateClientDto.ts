interface CreateClientDto {
  name: string
  email: string
  password: string
  nutritionistId: string
  age: number
  height: number
  weight: number
  goals: string
  activityLevel: string
}

export default CreateClientDto
