import styled from "styled-components";

const Price = styled.p`
  font-weight: 400;
  color: ${({ theme: { color } }) => color.black};
`;

export default Price;
