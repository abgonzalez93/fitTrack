import createNutritionistValidation from '@validations/nutritionist/createNutritionistValidation'
import updateNutritionistValidation from '@validations/nutritionist/updateNutritionistValidation'
import CreateNutritionistDto from '@dto/nutritionist/CreateNutritionistDto'
import UpdateNutritionistDto from '@dto/nutritionist/UpdateNutritionistDto'
import NutritionistUseCase from '@useCases/NutritionistUseCase'
import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import httpStatus from '@shared/httpStatus'
import validate from '@validations/index'

class NutritionistController {
  constructor(private readonly nutritionistUseCase: NutritionistUseCase) {}

  getAllNutritionists = asyncHandler(async (_req: Request, res: Response): Promise<void> => {
    const nutritionists = await this.nutritionistUseCase.getAllNutritionists()
    if (nutritionists.length === 0) res.status(httpStatus.NO_CONTENT).send('Nutritionists not found')
    res.status(httpStatus.OK).json(nutritionists)
  })

  createNutritionist = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    // Validate data with Ajv
    const data: CreateNutritionistDto = req.body
    validate(createNutritionistValidation, data)

    const nutritionist = await this.nutritionistUseCase.createNutritionist(data)
    res.status(httpStatus.CREATED).json(nutritionist)
  })

  getNutritionist = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const nutritionist = await this.nutritionistUseCase.getNutritionist(req.params.id)
    if (!nutritionist) res.status(httpStatus.NO_CONTENT).send('Nutritionist not found')
    res.status(httpStatus.OK).json(nutritionist)
  })

  updateNutritionist = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    // Validate data with Ajv
    const data: UpdateNutritionistDto = req.body
    validate(updateNutritionistValidation, data)

    const nutritionist = await this.nutritionistUseCase.updateNutritionist(req.params.id, data)
    res.status(httpStatus.OK).json(nutritionist)
  })

  deleteNutritionist = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const nutritionist = await this.nutritionistUseCase.deleteNutritionist(req.params.id)
    res.status(httpStatus.OK).json(nutritionist)
  })
}

export default NutritionistController
