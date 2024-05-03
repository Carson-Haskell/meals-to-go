import { useContext } from "react";

import Searchbar from "../../../components/Searchbar";
import RestaurantInfo from "../components/restaurant-info.component";
import Spacer from "../../../components/Spacer/Spacer";
import SafeArea from "../../../components/SafeArea/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import {
  RestaurantList,
  SearchContainer,
  LoadingIndicator
} from "./restaurants.styles";

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
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
