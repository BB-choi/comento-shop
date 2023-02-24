import ProductButton from "components/common/ProductButton";
import BasketPrice from "./BasketPrice";
import Wrap from "./Wrap";

const getProductsCount = (products) => {
  return products.length;
};

const getProductsTotalPrice = (products) => {
  return products.reduce((prev, { price }) => price + prev, 0);
};

const BasketFooter = ({ products }) => {
  return (
    <Wrap>
      <BasketPrice
        count={getProductsCount(products)}
        price={getProductsTotalPrice(products)}
      />
      <ProductButton
        onClick={() => {
          // TODO: 버튼 이벤트 핸들러 수정
          console.log("테스트용");
        }}
      >
        주문하기
      </ProductButton>
    </Wrap>
  );
};

export default BasketFooter;
