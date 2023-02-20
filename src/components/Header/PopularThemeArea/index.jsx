import { popular_themes } from "../../../data/mockData";
import ThemeLink from "./ThemeLink";
import Wrap from "./Wrap";

const PopularThemeArea = () => {
  return (
    <Wrap>
      {popular_themes.map((theme, idx) => (
        <ThemeLink to="/" key={`${theme}${idx}`}>
          # {theme}
        </ThemeLink>
      ))}
    </Wrap>
  );
};

export default PopularThemeArea;
