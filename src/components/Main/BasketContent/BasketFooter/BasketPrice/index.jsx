import PriceItem from "./PriceItem";
import Wrap from "./Wrap";

const DELIVERY_CHARGE = 3000;

const calcDeliveryCharge = (totalPrice) => {
  if (!totalPrice) {
    return 0;
  }

  return DELIVERY_CHARGE;
};

const BasketPrice = ({ count, price }) => {
  const deliveryCharge = calcDeliveryCharge(price);

  return (
    <Wrap>
      <PriceItem title={`상품금액 (${count}개)`} price={price} />
      <PriceItem title="배송비" price={deliveryCharge} />
      <PriceItem title="총 주문금액" price={price + deliveryCharge} total />
    </Wrap>
  );
};

export default BasketPrice;
