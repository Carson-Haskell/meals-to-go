import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import styled from "styled-components";

export const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
