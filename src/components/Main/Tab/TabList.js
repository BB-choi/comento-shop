import styled from "styled-components";

const TabList = styled.ul`
  height: 48px;
  display: flex;
  border: 1px solid ${({ theme: { color } }) => color.gray05};
  border-left: 0;
  border-right: 0;
`;

export default TabList;
