import styled from "styled-components";

const Wrap = styled.main`
  padding: 25px;
  background-color: ${({ theme: { color } }) => color.white};
`;

export default Wrap;
