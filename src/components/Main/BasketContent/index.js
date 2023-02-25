import { getProductDetail } from "data/mockData";
import { useEffect, useState } from "react";
import BasketFooter from "./BasketFooter";
import BasketProducts from "./BasketProducts";
import Wrap from "./Wrap";

const BasketContent = ({ productIds }) => {
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
        <BasketProducts products={products} />
      </Wrap>
      <BasketFooter products={products} />
    </>
  );
};

export default BasketContent;
