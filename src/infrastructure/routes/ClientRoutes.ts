import container from '@container/index'
import { Router } from 'express'

const clientRouter = Router()
const clientController = container.resolve('clientController')

clientRouter.get('/', clientController.getAllClients)
clientRouter.post('/', clientController.createClient)
clientRouter.get('/:id', clientController.getClient)
clientRouter.put('/:id', clientController.updateClient)
clientRouter.delete('/:id', clientController.deleteClient)

export default clientRouter
