import styled from "styled-components";

const Message = styled.p`
  padding: 31px 0;
  font-weight: 600;
  text-align: center;
  color: ${({ theme: { color } }) => color.gray02};
`;

export default Message;
