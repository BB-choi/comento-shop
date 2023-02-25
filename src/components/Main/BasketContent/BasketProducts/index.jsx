import BasketItem from "./BasketItem";
import Wrap from "./Wrap";

const BasketProducts = ({ products, onClickRemoveButton }) => {
  return (
    <Wrap>
      {products.map((product) => {
        const { id } = product;

        return (
          <BasketItem
            product={product}
            key={id}
            onClick={() => onClickRemoveButton(id)}
          />
        );
      })}
    </Wrap>
  );
};

export default BasketProducts;
