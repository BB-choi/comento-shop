import { mockTheme1Produdcts } from "../../../data/mockData";
import Card from "./Card";
import Wrap from "./Wrap";

const ItemList = () => {
  return (
    <Wrap>
      {mockTheme1Produdcts.map(({ id, name, description, url, thumbnail }) => (
        <Card
          linkTo={url}
          name={name}
          desc={description}
          imgUrl={thumbnail}
          key={id}
        />
      ))}
    </Wrap>
  );
};

export default ItemList;
