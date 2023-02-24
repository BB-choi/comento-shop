import IconButton from "components/common/IconButton";
import Info from "./Info";
import ButtonArea from "./Info/ButtonArea";
import Thumbnail from "./Thumbnail";
import Wrap from "./Wrap";

const BasketItem = ({ product }) => {
  const { thumbnail, name, price, id } = product;

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
            console.log(`테스트용 ${id}`);
          }}
        />
      </ButtonArea>
    </Wrap>
  );
};

export default BasketItem;
