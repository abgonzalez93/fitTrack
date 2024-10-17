import User from '@entities/User'

class Client extends User {
  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    public nutritionist: string,
    public age: number,
    public height: number,
    public weight: number,
    public goals: string,
    public activityLevel: string,
  ) {
    super(id, name, email, password, false)
  }

  // Métodos para obtener y actualizar atributos
  getAge(): number {
    return this.age
  }

  setAge(newAge: number): void {
    this.age = newAge
  }

  getHeight(): number {
    return this.height
  }

  setHeight(newHeight: number): void {
    this.height = newHeight
  }

  getWeight(): number {
    return this.weight
  }

  setWeight(newWeight: number): void {
    this.weight = newWeight
  }

  getGoals(): string {
    return this.goals
  }

  setGoals(newGoals: string): void {
    this.goals = newGoals
  }

  getActivityLevel(): string {
    return this.activityLevel
  }

  setActivityLevel(newActivityLevel: string): void {
    this.activityLevel = newActivityLevel
  }
}

export default Client
