import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import Searchbar from "../../../components/Searchbar";
import RestaurantInfo from "../components/restaurant-info.component";

const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

export default RestaurantsScreen;

// STYLING
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  search: {
    padding: 16
  },
  list: {
    flex: 1,
    padding: 16
  }
});
