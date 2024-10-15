import createNutritionistValidation from '@validations/nutritionist/createNutritionistValidation'
import updateNutritionistValidation from '@validations/nutritionist/updateNutritionistValidation'
import CreateNutritionistDto from '@dto/nutritionist/CreateNutritionistDto'
import UpdateNutritionistDto from '@dto/nutritionist/UpdateNutritionistDto'
import NutritionistUseCase from '@useCases/NutritionistUseCase'
import { Request, Response, NextFunction } from 'express'
import httpStatus from '@shared/httpStatus'
import validate from '@validations/index'

class NutritionistController {
  constructor(private readonly nutritionistUseCase: NutritionistUseCase) {}

  async getAllNutritionists(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const nutritionists = await this.nutritionistUseCase.getAllNutritionists()

      if (nutritionists.length === 0) {
        res.status(httpStatus.NO_CONTENT).send('Nutritionists not found')
      }

      res.status(httpStatus.OK).json(nutritionists)
    } catch (error) {
      next(error)
    }
  }

  async createNutritionist(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // Validate data with Ajv
      const data: CreateNutritionistDto = req.body
      validate(createNutritionistValidation, data)

      const nutritionist = await this.nutritionistUseCase.createNutritionist(data)
      res.status(httpStatus.CREATED).json(nutritionist)
    } catch (error) {
      next(error)
    }
  }

  async getNutritionist(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const nutritionist = await this.nutritionistUseCase.getNutritionist(req.params.id)

      if (!nutritionist) {
        res.status(httpStatus.NO_CONTENT).send('Nutritionist not found')
      }

      res.status(httpStatus.OK).json(nutritionist)
    } catch (error) {
      next(error)
    }
  }

  async updateNutritionist(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // Validate data with Ajv
      const data: UpdateNutritionistDto = req.body
      validate(updateNutritionistValidation, data)

      const nutritionist = await this.nutritionistUseCase.updateNutritionist(req.params.id, data)
      res.status(httpStatus.OK).json(nutritionist)
    } catch (error) {
      next(error)
    }
  }

  async deleteNutritionist(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const nutritionist = await this.nutritionistUseCase.deleteNutritionist(req.params.id)
      res.status(httpStatus.OK).json(nutritionist)
    } catch (error) {
      next(error)
    }
  }
}

export default NutritionistController
