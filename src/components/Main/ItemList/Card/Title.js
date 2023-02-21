import styled from "styled-components";

const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme: { color } }) => color.black};
  margin: 12px 0;
`;

export default Title;
