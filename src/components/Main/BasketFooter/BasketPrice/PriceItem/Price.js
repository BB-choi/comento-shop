import styled from "styled-components";

const TOTAL_PRICE_COLOR = "#fe5a5b";

const Price = styled.span`
font-size: 16px;
font-weight: ${({ total }) => (total ? 700 : 400)}};
line-height: 21px;
color: ${({ total, theme: { color } }) =>
  total ? TOTAL_PRICE_COLOR : color.black}};`;

export default Price;
