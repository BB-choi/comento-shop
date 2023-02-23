import Header from "components/Header";
import BasketProducts from "components/Main/BasketProducts";
import Container from "./Container";

const Basket = () => {
  return (
    <Container>
      <Header />
      <BasketProducts />
    </Container>
  );
};

export default Basket;
