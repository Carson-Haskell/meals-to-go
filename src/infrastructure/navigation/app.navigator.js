import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import RestaurantsNavigator from "./restaurants.navigator";
import Settings from "../../features/settings/screens/settings.screen";
import Map from "../../features/map/screens/map.screen";

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Restaurants") {
      iconName = focused ? "restaurant" : "restaurant-outline";
    } else if (route.name === "Map") {
      iconName = focused ? "map" : "map-outline";
    } else if (route.name === "Settings") {
      iconName = focused ? "settings" : "settings-outline";
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  headerShown: false,

  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  tabBarStyle: [
    {
      display: "flex"
    },
    null
  ]
});

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants-tab" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
