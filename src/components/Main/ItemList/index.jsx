import { mockThemeProducts } from "../../../data/mockData";
import Card from "./Card";
import Wrap from "./Wrap";

const ItemList = ({ products }) => {
  const currentProducts = mockThemeProducts[`mockTheme${products}Products`];

  return (
    <Wrap>
      {currentProducts.map(({ id, name, description, thumbnail }) => (
        <Card
          id={id}
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
