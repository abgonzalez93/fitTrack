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

  updateAge(newAge: number): void {
    this.age = newAge
  }

  getHeight(): number {
    return this.height
  }

  updateHeight(newHeight: number): void {
    this.height = newHeight
  }

  getWeight(): number {
    return this.weight
  }

  updateWeight(newWeight: number): void {
    this.weight = newWeight
  }

  getGoals(): string {
    return this.goals
  }

  updateGoals(newGoals: string): void {
    this.goals = newGoals
  }

  getActivityLevel(): string {
    return this.activityLevel
  }

  updateActivityLevel(newLevel: string): void {
    this.activityLevel = newLevel
  }
}

export default Client
