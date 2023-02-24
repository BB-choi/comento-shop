import styled from "styled-components";

const Wrap = styled.ul`
  width: 100%;
  padding: 31px 0;
  border-bottom: 1px solid #d9d9d9;
  background-color: ${({ theme: { color } }) => color.white};
`;

export default Wrap;
