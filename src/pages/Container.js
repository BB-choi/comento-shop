import styled from "styled-components";

const Container = styled.div`
  width: 390px;
  background-color: ${({ theme: { color } }) => color.gray05};
`;

export default Container;
