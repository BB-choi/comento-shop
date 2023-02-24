import BasketItem from "./BasketItem";
import Wrap from "./Wrap";

const BasketProducts = ({ products }) => {
  return (
    <Wrap>
      {products.map((productId) => (
        <BasketItem productId={productId} key={productId} />
      ))}
    </Wrap>
  );
};

export default BasketProducts;
