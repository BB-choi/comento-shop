import styled from "styled-components";

const Name = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme: { color } }) => color.black};
  margin-bottom: 8px;
`;

export default Name;
