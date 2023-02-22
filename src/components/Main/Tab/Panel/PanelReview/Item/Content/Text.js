import styled from "styled-components";

const Text = styled.p`
  margin-top: 15px;
  color: ${({ theme: { color } }) => color.black};
`;

export default Text;
