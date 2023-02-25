import styled from "styled-components";

const Button = styled.button`
  width: 120px;
  height: 40px;
  margin-top: 30px;
  font-family: "Noto Sans KR";
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme: { color } }) => color.black};
  background-color: ${({ theme: { color } }) => color.gray04};
  border-radius: 5px;
  cursor: pointer;
`;

export default Button;
