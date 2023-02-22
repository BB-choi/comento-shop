import Wrap from "components/Main/Wrap";
import Image from "./Image";

const PanelDetail = ({ imgUrl, desc }) => {
  return (
    <Wrap>
      <Image src={imgUrl} alt={desc} />
    </Wrap>
  );
};

export default PanelDetail;
