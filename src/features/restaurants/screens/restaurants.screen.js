import Searchbar from "../../../components/Searchbar";
import RestaurantInfo from "../components/restaurant-info.component";
import Spacer from "../../../components/Spacer/Spacer";
import SafeArea from "../../../components/SafeArea/safe-area.component";

import { RestaurantList, SearchContainer } from "./restaurants.styles";

const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfo />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);

export default RestaurantsScreen;
