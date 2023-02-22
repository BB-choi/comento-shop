import StyledButton from "./StyledButton";

const ProductButton = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default ProductButton;
