import CardImage from "./CardImage";
import Title from "./Title";
import CardLink from "./CardLink";
import Desc from "./Desc";
import Wrap from "./Wrap";

const Card = ({ linkTo, title, desc, imgUrl }) => {
  return (
    <Wrap>
      <CardLink to={linkTo}>
        <CardImage url={imgUrl} />
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </CardLink>
    </Wrap>
  );
};

export default Card;
