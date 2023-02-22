import styled from "styled-components";

const Wrap = styled.div`
  padding: 15px;
  background-color: ${({ theme: { color } }) => color.gray05};

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export default Wrap;
