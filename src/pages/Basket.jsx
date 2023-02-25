import Header from "components/Header";
import BasketContent from "components/Main/BasketContent";
import Modal from "components/Main/Modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBasket, removeBasket, removeBasketItem } from "utils/webStorage";
import Container from "./Container";

const INITIAL_PRODUCT_COUNT = 0;

const Basket = () => {
  const [productIds, setProductIds] = useState();
  const [productsCount, setProductsCount] = useState(INITIAL_PRODUCT_COUNT);
  const [isShowModal, setIsShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const products = getBasket().map(Number);

    setProductIds(products);
    setProductsCount(products.length);
  }, []);

  useEffect(() => {
    setProductIds(getBasket().map(Number));
  }, [productsCount]);

  const onClickRemoveButton = (productId) => {
    removeBasketItem(String(productId));
    setProductsCount(productIds.length - 1);
  };

  const onClickPurchaseButton = () => {
    if (!productsCount) {
      alert("장바구니에 담긴 상품이 없습니다.");

      return;
    }

    setIsShowModal(true);
  };

  const removeAllBasketItems = () => {
    removeBasket();
    setProductsCount(0);
  };

  const onClickConfirmButton = () => {
    removeAllBasketItems();
    navigate("/");
  };

  if (!productIds) {
    return null;
  }

  return (
    <Container>
      {isShowModal && <Modal onClick={onClickConfirmButton} />}
      <Header name="장바구니" />
      <BasketContent
        isShowModal={isShowModal}
        productIds={productIds}
        onClickRemoveButton={onClickRemoveButton}
        onClickPurchaseButton={onClickPurchaseButton}
      />
    </Container>
  );
};

export default Basket;
