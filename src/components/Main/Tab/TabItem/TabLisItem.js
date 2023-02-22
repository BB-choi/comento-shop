import styled from "styled-components";

const TabListItem = styled.li`
  width: 50%;
  height: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  background-color: ${({ theme: { color } }) => color.white};

  &[aria-selected="true"] {
    font-weight: 700;
    background-color: ${({ theme: { color } }) => color.gray05};
  }
`;

export default TabListItem;
