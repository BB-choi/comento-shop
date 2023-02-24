import Wrap from "./Wrap";
import Name from "./Name";
import Price from "./Price";

const Info = ({ name, price }) => {
  return (
    <Wrap>
      <Name>{name}</Name>
      <Price>{price.toLocaleString()}원</Price>
    </Wrap>
  );
};

export default Info;
