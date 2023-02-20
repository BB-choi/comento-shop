import { Link } from "react-router-dom";
import styled from "styled-components";

const ThemeLink = styled(Link)`
  width: 144px;
  height: 74px;
  font-weight: 700;
  color: ${({ theme: { color } }) => color.white};
  text-decoration: none;
  padding: 24px 16px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-right: 16px;
`;

export default ThemeLink;
