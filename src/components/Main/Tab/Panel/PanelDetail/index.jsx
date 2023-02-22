import Image from "./Image";

const PanelDetail = ({ imgUrl, desc }) => {
  return <Image src={imgUrl} alt={desc} />;
};

export default PanelDetail;
