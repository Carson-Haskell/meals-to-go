import styled from "styled-components/native";

import { Card } from "react-native-paper";

export const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const CardCover = styled(Card.Cover)`
  background-color: white;
  padding: ${({ theme }) => theme.space[3]};
`;

export const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
