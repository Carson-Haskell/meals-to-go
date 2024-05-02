import { useContext } from "react";

import Searchbar from "../../../components/Searchbar";
import RestaurantInfo from "../components/restaurant-info.component";
import Spacer from "../../../components/Spacer/Spacer";
import SafeArea from "../../../components/SafeArea/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { RestaurantList, SearchContainer } from "./restaurants.styles";

const RestaurantsScreen = () => {
  const { restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfo />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
