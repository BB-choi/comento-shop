import styled from "styled-components";

const ThemeButton = styled.button`
  height: 74px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme: { color } }) => color.white};
  padding: 24px 16px;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border-radius: 10px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export default ThemeButton;
