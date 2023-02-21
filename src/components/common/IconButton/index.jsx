import backIcon from "../../../assets/images/back.svg";
import StyledButton from "./StyledButton";

const icons = {
  back: { src: backIcon, alt: "뒤로 가기" },
};

const IconButton = ({ icon, onClick }) => {
  const { src, alt } = icons[icon];

  return (
    <StyledButton onClick={onClick}>
      <img src={src} alt={alt} />
    </StyledButton>
  );
};

export default IconButton;
