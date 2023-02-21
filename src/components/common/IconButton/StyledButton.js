import styled from "styled-components";

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: { color } }) => color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc(50% - 10px);
  left: 25px;
  cursor: pointer;
`;

export default StyledButton;
