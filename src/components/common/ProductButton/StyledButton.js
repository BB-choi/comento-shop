import styled, { css } from "styled-components";

const stickyStyle = css`
  position: sticky;
  bottom: 0;
  left: 0;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 70px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { color } }) => color.secondary01};
  cursor: pointer;

  ${({ sticky }) => sticky && stickyStyle}
`;

export default StyledButton;
