import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";

import { StyledView } from "./rating.styles";

const Rating = ({ rating, placeId }) => {
  return (
    <StyledView>
      {rating.map((_, index) => (
        <SvgXml
          xml={star}
          width={20}
          height={20}
          key={`star-${placeId}-${index}`}
        />
      ))}
    </StyledView>
  );
};

export default Rating;
