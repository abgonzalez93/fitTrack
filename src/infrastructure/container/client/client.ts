import ClientController from '@controllers/ClientController'
import ClientAdapter from '@adapters/ClientAdapter'
import ClientService from '@services/ClientService'
import ClientUseCase from '@useCases/ClientUseCase'
import Container from '@container/Container'

const clientDependencies = (container: Container): void => {
  const databaseAdapter = container.resolve('databaseAdapter')

  const clientAdapter = new ClientAdapter(databaseAdapter)
  container.register('clientAdapter', clientAdapter)

  const clientService = new ClientService(clientAdapter)
  container.register('clientService', clientService)

  const clientUseCase = new ClientUseCase(clientService)
  container.register('clientUseCase', clientUseCase)

  const clientController = new ClientController(clientUseCase)
  container.register('clientController', clientController)
}

export default clientDependencies
