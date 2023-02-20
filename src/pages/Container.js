import styled from "styled-components";

const Container = styled.div`
  width: 390px;
  font-family: "Noto Sans KR", sans-serif;
  background-color: ${({ theme: { color } }) => color.gray05};
`;

export default Container;
