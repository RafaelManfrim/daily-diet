import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home"
import { Statistics } from "@screens/Statistics";
import { CreateMeal } from "@screens/CreateMeal";
import { CreateMealFeedback } from "@screens/CreateMealFeedback";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="createMeal" component={CreateMeal} />
      <Screen name="createMealFeedback" component={CreateMealFeedback} />
    </Navigator>
  )
}