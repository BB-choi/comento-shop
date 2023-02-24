import styled from "styled-components";

const Wrap = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  &:not(:last-child) {
    margin-bottom: 60px;
  }
`;

export default Wrap;
