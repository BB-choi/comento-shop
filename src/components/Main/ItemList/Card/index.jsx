import CardImage from "./CardImage";
import Title from "./Title";
import CardLink from "./CardLink";
import Desc from "./Desc";
import Wrap from "./Wrap";

const Card = ({ id, name, desc, imgUrl }) => {
  return (
    <Wrap>
      <CardLink to={`/product/${id}`}>
        <CardImage url={imgUrl} />
        <Title>{name}</Title>
        <Desc>{desc}</Desc>
      </CardLink>
    </Wrap>
  );
};

export default Card;
