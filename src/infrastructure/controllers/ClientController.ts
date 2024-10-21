import createClientValidation from '@validations/client/createClientValidation'
import updateClientValidation from '@validations/client/updateClientValidation'
import CreateClientDto from '@dto/client/CreateClientDto'
import UpdateClientDto from '@dto/client/UpdateClientDto'
import ClientUseCase from '@useCases/ClientUseCase'
import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import httpStatus from '@shared/httpStatus'
import validate from '@validations/index'

class ClientController {
  constructor(private readonly clientUseCase: ClientUseCase) {}

  getAllClients = asyncHandler(async (_req: Request, res: Response): Promise<void> => {
    const clients = await this.clientUseCase.getAllClients()
    if (clients.length === 0) res.status(httpStatus.NO_CONTENT).send('Clients not found')
    res.status(httpStatus.OK).json(clients)
  })

  createClient = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    // Validate data with Ajv
    const data: CreateClientDto = req.body
    validate(createClientValidation, data)

    const client = await this.clientUseCase.createClient(data)
    res.status(httpStatus.CREATED).json(client)
  })

  getClient = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const client = await this.clientUseCase.getClient(req.params.id)
    if (!client) res.status(httpStatus.NO_CONTENT).send('Client not found')
    res.status(httpStatus.OK).json(client)
  })

  updateClient = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    // Validate data with Ajv
    const data: UpdateClientDto = req.body
    validate(updateClientValidation, data)

    const client = await this.clientUseCase.updateClient(req.params.id, data)
    res.status(httpStatus.OK).json(client)
  })

  deleteClient = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const client = await this.clientUseCase.deleteClient(req.params.id)
    res.status(httpStatus.OK).json(client)
  })
}

export default ClientController
