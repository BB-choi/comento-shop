import BasketItem from "./BasketItem";
import Wrap from "./Wrap";

const temp_item = [1, 3, 10];

const BasketProducts = () => {
  return (
    <Wrap>
      {temp_item.map((productId) => (
        <BasketItem productId={productId} key={productId} />
      ))}
    </Wrap>
  );
};

export default BasketProducts;
