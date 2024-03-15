import { StyledText } from "./styles";

const Text = ({ variant = "body", children }) => {
  return <StyledText variant={variant}>{children}</StyledText>;
};

export default Text;
