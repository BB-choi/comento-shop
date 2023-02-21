import Name from "./Name";
import Price from "./Price";
import Wrap from "../Wrap";

const ProductInfo = ({ name, price }) => {
  return (
    <Wrap>
      <Name>{name}</Name>
      <Price>{`${price.toLocaleString()}원`}</Price>
    </Wrap>
  );
};

export default ProductInfo;
