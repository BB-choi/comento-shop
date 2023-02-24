import styled from "styled-components";

const Name = styled.p`
  font-weight: 700;
  word-break: keep-all;
  color: ${({ theme: { color } }) => color.black};
`;

export default Name;
