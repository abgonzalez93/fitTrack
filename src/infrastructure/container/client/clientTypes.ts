import ClientController from '@controllers/ClientController'
import ClientAdapter from '@adapters/ClientAdapter'
import ClientService from '@services/ClientService'
import ClientUseCase from '@useCases/ClientUseCase'

interface ClientContainerMap {
  clientAdapter: ClientAdapter
  clientService: ClientService
  clientUseCase: ClientUseCase
  clientController: ClientController
}

export default ClientContainerMap
