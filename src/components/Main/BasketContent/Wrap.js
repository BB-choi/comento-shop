import styled, { css } from "styled-components";

const Wrap = styled.div`
  min-height: calc(100vh - 67px - 143px - 70px);
  padding: 0 25px;
  background-color: ${({ theme: { color } }) => color.white};

  ${({ isShowModal }) =>
    isShowModal &&
    css`
      max-height: calc(100vh - 67px - 143px - 70px);
    `}
`;

export default Wrap;
