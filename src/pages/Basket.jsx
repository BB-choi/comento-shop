import Header from "components/Header";
import BasketContent from "components/Main/BasketContent";
import { useEffect, useState } from "react";
import { getBasket, removeBasket } from "utils/webStorage";
import Container from "./Container";

const INITIAL_PRODUCT_COUNT = 0;

const Basket = () => {
  const [productIds, setProductIds] = useState();
  const [productsCount, setProductsCount] = useState(INITIAL_PRODUCT_COUNT);

  useEffect(() => {
    const products = getBasket().map(Number);

    setProductIds(products);
    setProductsCount(products.length);
  }, []);

  useEffect(() => {
    setProductIds(getBasket().map(Number));
  }, [productsCount]);

  const onClickRemoveButton = (productId) => {
    removeBasket(String(productId));
    setProductsCount(productIds.length - 1);
  };

  if (!productIds) {
    return null;
  }

  return (
    <Container>
      <Header name="장바구니" />
      <BasketContent
        productIds={productIds}
        onClickRemoveButton={onClickRemoveButton}
      />
    </Container>
  );
};

export default Basket;
