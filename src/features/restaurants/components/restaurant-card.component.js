import { Card } from "react-native-paper";
import Rating from "./rating.component";
import Spacer from "../../../components/Spacer/Spacer";

import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";

import styled from "styled-components/native";
import { Text, Image, View } from "react-native";

const RestaurantCard = ({
  name,
  address,
  photoUrl,
  rating,
  isOpenNow,
  isClosedTemporarily,
  icon
}) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <StyledCard elevation={5}>
      <CardCover key={name} source={{ uri: photoUrl }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating rating={ratingArray} />
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const CardCover = styled(Card.Cover)`
  background-color: white;
  padding: ${({ theme }) => theme.space[3]};
`;

const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.ui.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export default RestaurantCard;
