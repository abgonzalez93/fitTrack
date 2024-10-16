import nutritionistDependencies from '@container/nutritionist/nutritionist'
import databaseDependencies from '@container/database/database'
import clientDependencies from '@container/client/client'
import Container from '@container/Container'

const container = new Container()

databaseDependencies(container)
nutritionistDependencies(container)
clientDependencies(container)

export default container
