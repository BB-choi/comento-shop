import { popular_themes } from "../../../data/mockData";
import ThemeButton from "./ThemeButton";
import Wrap from "./Wrap";

const PopularThemeArea = ({ setProducts }) => {
  return (
    <Wrap>
      {popular_themes.map(({ id, name }) => (
        <ThemeButton onClick={() => setProducts(id)} key={id}>
          # {name}
        </ThemeButton>
      ))}
    </Wrap>
  );
};

export default PopularThemeArea;
