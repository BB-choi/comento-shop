import PriceItem from "./PriceItem";
import Wrap from "./Wrap";

const DELIVERY_CHARGE = 3000;
const MIN_FREE_DELIVERY_CHARGE = 30000;

const calcDeliveryCharge = (totalPrice) => {
  if (totalPrice < MIN_FREE_DELIVERY_CHARGE) {
    return DELIVERY_CHARGE;
  }

  return 0;
};

const BasketPrice = ({ price, delivery, count = 0 }) => {
  return (
    <Wrap>
      <PriceItem title={`상품금액 (${count}개)`} price={42800} />
      <PriceItem title="배송비" price={0} />
      <PriceItem title="총 주문금액" price={21800} total />
    </Wrap>
  );
};

export default BasketPrice;
