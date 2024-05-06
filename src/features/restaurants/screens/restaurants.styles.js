import styled from "styled-components/native";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``;

export const LoadingIndicator = styled(ActivityIndicator)({
  flex: 1,
  marginBottom: 64
});
