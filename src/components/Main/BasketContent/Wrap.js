import styled from "styled-components";

const Wrap = styled.div`
  min-height: 100vh;
  padding: 0 25px;
  background-color: ${({ theme: { color } }) => color.white};
`;

export default Wrap;
