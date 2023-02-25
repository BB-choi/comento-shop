import IconButton from "components/common/IconButton";
import Info from "./Info";
import ButtonArea from "./Info/ButtonArea";
import Thumbnail from "./Thumbnail";
import Wrap from "./Wrap";

const BasketItem = ({ product, onClick: onClickRemoveButton }) => {
  const { thumbnail, name, price } = product;

  return (
    <Wrap>
      <Thumbnail src={thumbnail} alt={name} />
      <Info name={name} price={price} />
      <ButtonArea>
        <IconButton
          icon="delete"
          component="basket"
          onClick={onClickRemoveButton}
        />
      </ButtonArea>
    </Wrap>
  );
};

export default BasketItem;
