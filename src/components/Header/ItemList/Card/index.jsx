import CardImage from "./CardImage";
import Title from "./Title";
import CardLink from "./CardLink";

const Card = ({ linkTo, title, desc, imgUrl }) => {
  return (
    <CardLink to={linkTo}>
      <CardImage url={imgUrl} />
      <Title>{title}</Title>
    </CardLink>
  );
};

export default Card;
