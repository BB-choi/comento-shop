import Title from "./Title";
import Price from "./Price";
import Wrap from "./Wrap";

const PriceItem = ({ title, price, total }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <Price total={total}>{price.toLocaleString()}원</Price>
    </Wrap>
  );
};

export default PriceItem;
