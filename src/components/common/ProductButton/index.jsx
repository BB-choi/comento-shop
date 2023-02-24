import StyledButton from "./StyledButton";

const ProductButton = ({ onClick, children, sticky }) => {
  return (
    <StyledButton onClick={onClick} sticky={sticky}>
      {children}
    </StyledButton>
  );
};

export default ProductButton;
