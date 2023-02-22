import Avatar from "./Avatar";
import Grade from "./Grade";
import Text from "./Text";
import Wrap from "./Wrap";

const Header = ({ avatar, score, date, name }) => {
  return (
    <Wrap>
      <div>
        <Avatar src={avatar} />
      </div>
      <div>
        <Grade>{score}</Grade>
        <Text>{name}</Text>
        <Text>{date}</Text>
      </div>
    </Wrap>
  );
};

export default Header;
