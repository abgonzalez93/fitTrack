import NutritionistContainerMap from '@container/nutritionist/nutritionistTypes'
import DatabaseContainerMap from '@container/database/databaseTypes'
import ClientContainerMap from '@container/client/clientTypes'
import UserContainerMap from '@container/user/userTypes'

interface ContainerInstanceMap extends
  DatabaseContainerMap,
  UserContainerMap,
  ClientContainerMap,
  NutritionistContainerMap
{}

export default ContainerInstanceMap
