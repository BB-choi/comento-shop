import BasketProducts from "./BasketProducts";
import Wrap from "./Wrap";

const BasketContent = ({ products }) => {
  return (
    <Wrap>
      <BasketProducts products={products} />
    </Wrap>
  );
};

export default BasketContent;
