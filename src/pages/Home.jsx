import { useEffect, useState } from "react";
import Header from "../components/Header";
import ItemList from "../components/Main/ItemList";
import Container from "./Container";

const DEFAULT_PRODUCTS = 1;

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    setTimeout(() => {
      setProducts(DEFAULT_PRODUCTS);
    }, 1000);
  }, []);

  return (
    <Container>
      <Header setProducts={setProducts} />
      {products && <ItemList products={products} />}
    </Container>
  );
};

export default Home;
