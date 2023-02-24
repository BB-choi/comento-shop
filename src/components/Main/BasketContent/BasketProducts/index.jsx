import BasketItem from "./BasketItem";
import Wrap from "./Wrap";

const BasketProducts = ({ products }) => {
  return (
    <Wrap>
      {products.map((product) => (
        <BasketItem product={product} key={product.id} />
      ))}
    </Wrap>
  );
};

export default BasketProducts;
