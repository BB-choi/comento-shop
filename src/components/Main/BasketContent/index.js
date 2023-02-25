import { getProductDetail } from "data/mockData";
import { useEffect, useState } from "react";
import BasketFooter from "./BasketFooter";
import BasketProducts from "./BasketProducts";
import Message from "./Message";
import Wrap from "./Wrap";

const BasketContent = ({ productIds, onClickRemoveButton }) => {
  const [products, setProducts] = useState();

  useEffect(
    () => setProducts(productIds.map((id) => getProductDetail(id))),
    [productIds]
  );

  if (!products) {
    return null;
  }

  return (
    <>
      <Wrap>
        {(products.length && (
          <BasketProducts
            products={products}
            onClickRemoveButton={onClickRemoveButton}
          />
        )) || <Message>장바구니가 비어있습니다.</Message>}
      </Wrap>
      <BasketFooter products={products} />
    </>
  );
};

export default BasketContent;
