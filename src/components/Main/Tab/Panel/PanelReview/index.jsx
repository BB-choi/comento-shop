import Wrap from "components/Main/Wrap";
import { mockReviews } from "data/mockData";
import Item from "./Item";

const PanelReview = () => {
  return (
    <Wrap>
      {mockReviews.map(({ id, ...data }) => (
        <Item key={id} data={data} />
      ))}
    </Wrap>
  );
};

export default PanelReview;
