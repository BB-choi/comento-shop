import { useNavigate } from "react-router-dom";
import IconButton from "../common/IconButton";
import PopularThemeArea from "./PopularThemeArea";
import Title from "./Title";
import Wrap from "./Wrap";

const Header = ({ setProducts }) => {
  const navigate = useNavigate();

  return (
    <>
      <Wrap>
        {!setProducts && (
          <IconButton
            icon="back"
            onClick={() => {
              navigate(-1);
            }}
          />
        )}
        <Title>코멘토 쇼핑</Title>
      </Wrap>
      {setProducts && <PopularThemeArea setProducts={setProducts} />}
    </>
  );
};

export default Header;
