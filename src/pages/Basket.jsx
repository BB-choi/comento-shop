import Header from "components/Header";
import BasketContent from "components/Main/BasketContent";
import { useEffect, useState } from "react";
import { getBasket } from "utils/webStorage";
import Container from "./Container";

const Basket = () => {
  const [productIds, setProductIds] = useState();

  useEffect(() => {
    setProductIds(getBasket().map(Number));
  }, []);

  if (!productIds) {
    return null;
  }

  return (
    <Container>
      <Header name="장바구니" />
      <BasketContent productIds={productIds} />
    </Container>
  );
};

export default Basket;
