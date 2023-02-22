import styled from "styled-components";

const Text = styled.span`
  font-size: 15px;
  color: ${({ theme: { color } }) => color.gray03};
  display: inline-block;

  &:first-of-type {
    :after {
      height: 12px;
      width: 1px;
      display: inline-block;
      content: "";
      margin: 0 5px;
      background-color: ${({ theme: { color } }) => color.gray03};
    }
  }
`;

export default Text;
