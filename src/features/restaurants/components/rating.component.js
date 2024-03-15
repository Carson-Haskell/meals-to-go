import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const Rating = ({ rating }) => {
  return (
    <StyledView>
      {rating.map((_, index) => (
        <SvgXml xml={star} width={20} height={20} key={index} />
      ))}
    </StyledView>
  );
};

const StyledView = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;

export default Rating;
