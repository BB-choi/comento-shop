import { Link } from "react-router-dom";
import styled from "styled-components";

const CardLink = styled(Link)`
  text-decoration: none;

  &:hover,
  &:active,
  &:visited {
    color: ${({ theme: { color } }) => color.black};
  }
`;

export default CardLink;
