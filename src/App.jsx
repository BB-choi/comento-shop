import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider
        theme={{
          color: {
            black: "#000",
            white: "#FFF",
            primary01: "#854BFF",
            primary02: "#D7CBEF",
            secondary01: "#24DBAF",
            secondary02: "#CDF3EA",
            gray01: "#212121",
            gray02: "#616161",
            gray03: "#A7A7A7",
            gray04: "#ccc",
            gray05: "#eee",
            gray06: "#F5F5F5",
          },
        }}
      >
        <GlobalStyle />
        <Routes>
          <Route index element={<Home />} />
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="basket" element={<Basket />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
