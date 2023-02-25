import Popup from "./Popup";
import Wrap from "./Wrap";

const Modal = ({ onClick }) => {
  return (
    <Wrap>
      <Popup onClick={onClick}>주문되었습니다.</Popup>
    </Wrap>
  );
};

export default Modal;
