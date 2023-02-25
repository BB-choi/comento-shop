import Button from "./Button";
import Text from "./Text";
import Wrap from "./Wrap";

const Popup = ({ children: message, onClick }) => {
  return (
    <Wrap>
      <Text>{message}</Text>
      <Button onClick={onClick}>확인</Button>
    </Wrap>
  );
};

export default Popup;
