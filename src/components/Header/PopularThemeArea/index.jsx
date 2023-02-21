import { popular_themes } from "../../../data/mockData";
import ThemeLink from "./ThemeLink";
import Wrap from "./Wrap";

const PopularThemeArea = () => {
  return (
    <Wrap>
      {popular_themes.map(({ id, name }) => (
        <ThemeLink to="/" key={id}>
          # {name}
        </ThemeLink>
      ))}
    </Wrap>
  );
};

export default PopularThemeArea;
