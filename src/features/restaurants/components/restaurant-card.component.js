import { Image } from "react-native";
import { SvgXml } from "react-native-svg";

import Rating from "./rating.component";
import Spacer from "../../../components/Spacer/Spacer";
import Text from "../../../components/Typography";

import open from "../../../../assets/open";

import {
  StyledCard,
  CardCover,
  Info,
  Section,
  SectionEnd,
  Icon,
  Address
} from "./restaurant-card.styles";

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
        <Text variant="label">{name}</Text>
        <Section>
          <Rating rating={ratingArray} />
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </StyledCard>
  );
};

export default RestaurantCard;
