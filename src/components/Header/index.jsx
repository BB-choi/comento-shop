import PopularThemeArea from "./PopularThemeArea";
import Title from "./Title";
import Wrap from "./Wrap";

const Header = () => {
  return (
    <>
      <Wrap>
        <Title>코멘토 쇼핑</Title>
      </Wrap>
      <PopularThemeArea />
    </>
  );
};

export default Header;
