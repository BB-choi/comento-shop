import IconButton from "components/common/IconButton";
import { getProductDetail } from "data/mockData";
import { useEffect, useState } from "react";
import Info from "./Info";
import ButtonArea from "./Info/ButtonArea";
import Thumbnail from "./Thumbnail";
import Wrap from "./Wrap";

const BasketItem = ({ productId }) => {
  const [product, setProduct] = useState();

  useEffect(() => setProduct(getProductDetail(productId)), [productId]);

  if (!product) {
    return null;
  }

  const { thumbnail, name, price } = product;

  return (
    <Wrap>
      <Thumbnail src={thumbnail} alt={name} />
      <Info name={name} price={price} />
      <ButtonArea>
        <IconButton
          icon="delete"
          component="basket"
          onClick={() => {
            // TODO: 클릭 이벤트핸들러 수정
            console.log(`테스트용 ${name}`);
          }}
        />
      </ButtonArea>
    </Wrap>
  );
};

export default BasketItem;
