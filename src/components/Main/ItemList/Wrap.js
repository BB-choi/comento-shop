import styled from "styled-components";

const Wrap = styled.div`
  margin-top: 8px;
  padding: 40px 24px 0;
  background-color: ${({ theme: { color } }) => color.white};
`;

export default Wrap;
