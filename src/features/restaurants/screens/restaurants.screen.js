import { useContext } from "react";

import RestaurantInfo from "../components/restaurant-info.component";
import Spacer from "../../../components/Spacer/Spacer";
import SafeArea from "../../../components/SafeArea/safe-area.component";
import Search from "../components/search.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { RestaurantList, LoadingIndicator } from "./restaurants.styles";

const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <LoadingIndicator size="large" />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <RestaurantInfo restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
