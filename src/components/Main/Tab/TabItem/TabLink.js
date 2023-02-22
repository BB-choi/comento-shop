import { Link } from "react-router-dom";
import styled from "styled-components";

const TabLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { color } }) => color.black};

  &:hover,
  &:visited,
  &:active {
    color: ${({ theme: { color } }) => color.black};
  }
`;

export default TabLink;
