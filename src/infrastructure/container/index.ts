import nutritionistDependencies from '@container/nutritionist/nutritionist'
import databaseDependencies from '@container/database/database'
import clientDependencies from '@container/client/client'
import userDependencies from '@container/user/user'
import Container from '@container/Container'

const container = new Container()

databaseDependencies(container)
userDependencies(container)
clientDependencies(container)
nutritionistDependencies(container)

export default container
