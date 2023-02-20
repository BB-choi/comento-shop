import { shop_items } from "../../../data/mockData";
import Card from "./Card";
import Wrap from "./Wrap";

const ItemList = () => {
  return (
    <Wrap>
      {shop_items.map(({ item_id, title, desc, url }) => (
        <Card linkTo="/" title={title} desc={desc} imgUrl={url} key={item_id} />
      ))}
    </Wrap>
  );
};

export default ItemList;
