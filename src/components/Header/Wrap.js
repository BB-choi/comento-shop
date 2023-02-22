import styled from "styled-components";

const Wrap = styled.div`
  height: 66px;
  padding: 0 25px;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: 0;
  background-color: ${({ theme: { color } }) => color.white};
`;

export default Wrap;
