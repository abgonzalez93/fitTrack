import NutritionistContainerMap from '@container/nutritionist/nutritionistTypes'
import DatabaseContainerMap from '@container/database/databaseTypes'
import ClientContainerMap from '@container/client/clientTypes'

interface ContainerInstanceMap extends
  NutritionistContainerMap,
  ClientContainerMap,
  DatabaseContainerMap
{}

export default ContainerInstanceMap
