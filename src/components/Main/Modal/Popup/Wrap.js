import styled from "styled-components";

const Wrap = styled.div`
  width: 240px;
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { color } }) => color.white};
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  position: absolute;
  top: calc(50vh - 80px);
  left: calc((390px / 2) - 120px);
`;

export default Wrap;
