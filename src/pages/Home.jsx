import { useState } from "react";
import Header from "../components/Header";
import ItemList from "../components/Main/ItemList";
import Container from "./Container";

const DEFAULT_PRODUCTS = 1;

const Home = () => {
  const [products, setProducts] = useState(DEFAULT_PRODUCTS);

  return (
    <Container>
      <Header setProducts={setProducts} />
      <ItemList products={products} />
    </Container>
  );
};

export default Home;
