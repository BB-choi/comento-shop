import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product/:productId" element={<ProductDetail />} />
        <Route path="basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
