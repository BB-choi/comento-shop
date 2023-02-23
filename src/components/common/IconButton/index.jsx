import backIcon from "assets/images/back.svg";
import deleteIcon from "assets/images/delete.svg";
import StyledButton from "./StyledButton";

const icons = {
  back: { src: backIcon, alt: "뒤로 가기" },
  delete: { src: deleteIcon, alt: "삭제" },
};

const IconButton = ({ icon, onClick, component }) => {
  const { src, alt } = icons[icon];

  return (
    <StyledButton onClick={onClick} component={component}>
      <img src={src} alt={alt} />
    </StyledButton>
  );
};

export default IconButton;
