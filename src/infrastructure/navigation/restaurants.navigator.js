import { createStackNavigator } from "@react-navigation/stack";

import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export default function RestaurantsNavigator() {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name="Restaurants-stack"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
}
