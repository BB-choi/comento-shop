import styled, { css } from "styled-components";

const buttonPosition = {
  header: css`
    top: calc(50% - 10px);
    left: 25px;
  `,
  basket: css`
    top: 0;
    right: 0;
  `,
};

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: { color } }) => color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  z-index: 0;
  ${({ component }) => buttonPosition[component]}
`;

export default StyledButton;
