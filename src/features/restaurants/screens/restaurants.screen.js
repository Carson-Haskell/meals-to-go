import { SafeAreaView, View, StatusBar } from "react-native";
import Searchbar from "../../../components/Searchbar";
import RestaurantInfo from "../components/restaurant-info.component";
import styled from "styled-components";

const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfo />
    </RestaurantListContainer>
  </SafeArea>
);

export default RestaurantsScreen;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;
