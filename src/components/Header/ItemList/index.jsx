import { shop_items } from "../../../data/mockData";
import Card from "./Card";
import Wrap from "./Wrap";

const ItemList = () => {
  return (
    <Wrap>
      {shop_items.map(({ item_id, title, desc, url, img }) => (
        <Card
          linkTo={url}
          title={title}
          desc={desc}
          imgUrl={img}
          key={item_id}
        />
      ))}
    </Wrap>
  );
};

export default ItemList;
