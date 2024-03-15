import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3
};

const positionVariant = {
  top: "margin-top",
  right: "margin-right",
  bottom: "margin-bottom",
  left: "margin-left"
};

export const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

export const SpacerView = styled.View`
  ${({ variant }) => variant}
`;
