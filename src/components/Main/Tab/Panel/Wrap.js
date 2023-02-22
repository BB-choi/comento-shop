import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  display: none;

  &[aria-expanded="true"] {
    display: block;
  }
`;

export default Wrap;
