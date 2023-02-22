import Content from "./Content";
import Header from "./Header";
import Wrap from "./Wrap";

const Item = ({
  data: { username, score, createdDate, profileImage, reviewText },
}) => {
  return (
    <Wrap>
      <Header
        avatar={profileImage}
        score={score}
        date={createdDate}
        name={username}
      />
      <Content text={reviewText} />
    </Wrap>
  );
};

export default Item;
