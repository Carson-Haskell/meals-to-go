import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";
import { Text } from "react-native";

import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export default function RestaurantsNavigator() {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsStack"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={() => <Text>RestaurantDetails</Text>}
      />
    </RestaurantStack.Navigator>
  );
}
