import Card from "./Card";
import Wrap from "./Wrap";

const temp_items = [
  "https://raw.githubusercontent.com/congchu/comento-shop-server/master/assets/images/product1.jpg",
  "https://raw.githubusercontent.com/congchu/comento-shop-server/master/assets/images/product2.jpg",
  "https://raw.githubusercontent.com/congchu/comento-shop-server/master/assets/images/product3.jpg",
];

const ItemList = () => {
  return (
    <Wrap>
      {temp_items.map((url, i) => (
        <Card linkTo="/" imgUrl={url} key={i + 1} />
      ))}
    </Wrap>
  );
};

export default ItemList;
