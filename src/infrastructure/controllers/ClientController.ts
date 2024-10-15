import createClientValidation from '@validations/client/createClientValidation'
import updateClientValidation from '@validations/client/updateClientValidation'
import { Request, Response, NextFunction } from 'express'
import CreateClientDto from '@dto/client/CreateClientDto'
import UpdateClientDto from '@dto/client/UpdateClientDto'
import ClientUseCase from '@useCases/ClientUseCase'
import httpStatus from '@shared/httpStatus'
import validate from '@validations/index'

class ClientController {
  constructor(private readonly clientUseCase: ClientUseCase) {}

  async getAllClients(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const clients = await this.clientUseCase.getAllClients()

      if (clients.length === 0) {
        res.status(httpStatus.NO_CONTENT).send('Clients not found')
      }

      res.status(httpStatus.OK).json(clients)
    } catch (error) {
      next(error)
    }
  }

  async createClient(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // Validate data with Ajv
      const data: CreateClientDto = req.body
      validate(createClientValidation, data)

      const client = await this.clientUseCase.createClient(data)
      res.status(httpStatus.CREATED).json(client)
    } catch (error) {
      next(error)
    }
  }

  async getClient(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const client = await this.clientUseCase.getClient(req.params.id)

      if (!client) {
        res.status(httpStatus.NO_CONTENT).send('Client not found')
      }

      res.status(httpStatus.OK).json(client)
    } catch (error) {
      next(error)
    }
  }

  async updateClient(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // Validate data with Ajv
      const data: UpdateClientDto = req.body
      validate(updateClientValidation, data)

      const client = await this.clientUseCase.updateClient(req.params.id, data)
      res.status(httpStatus.OK).json(client)
    } catch (error) {
      next(error)
    }
  }

  async deleteClient(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const client = await this.clientUseCase.deleteClient(req.params.id)
      res.status(httpStatus.OK).json(client)
    } catch (error) {
      next(error)
    }
  }
}

export default ClientController
