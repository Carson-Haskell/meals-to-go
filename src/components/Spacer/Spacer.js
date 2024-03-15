import { useTheme } from "styled-components/native";
import { SpacerView, getVariant } from "./styles";

const Spacer = ({ position = "top", size = "small", children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

export default Spacer;
