import ClientController from '@controllers/ClientController'
import ClientAdapter from '@adapters/ClientAdapter'
import ClientUseCase from '@useCases/ClientUseCase'

interface ClientContainerMap {
  clientAdapter: ClientAdapter
  clientUseCase: ClientUseCase
  clientController: ClientController
}

export default ClientContainerMap
