import Image from "./Image";
import Wrap from "./Wrap";

const CardImage = ({ url }) => {
  return (
    <Wrap>
      <Image src={url} />
    </Wrap>
  );
};

export default CardImage;
