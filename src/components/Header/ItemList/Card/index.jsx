import { Link } from "react-router-dom";
import CardImage from "./CardImage";

const Card = ({ linkTo, imgUrl }) => {
  console.log("linkTo", linkTo, "imgUrl", imgUrl);

  return (
    <Link to={linkTo}>
      <CardImage url={imgUrl} />
    </Link>
  );
};

export default Card;
