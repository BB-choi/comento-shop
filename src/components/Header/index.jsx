import { useNavigate } from "react-router-dom";
import IconButton from "../common/IconButton";
import PopularThemeArea from "./PopularThemeArea";
import Title from "./Title";
import Wrap from "./Wrap";

const SITE_NAME = "코멘토 쇼핑";

const Header = ({ setProducts, name = SITE_NAME }) => {
  const navigate = useNavigate();

  return (
    <>
      <Wrap>
        {!setProducts && (
          <IconButton
            icon="back"
            component="header"
            onClick={() => {
              navigate(-1);
            }}
          />
        )}
        <Title>{name}</Title>
      </Wrap>
      {setProducts && <PopularThemeArea setProducts={setProducts} />}
    </>
  );
};

export default Header;
