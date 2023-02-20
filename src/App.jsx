import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route index element={<Home />} />
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
