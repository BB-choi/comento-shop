import Header from "components/Header";
import BasketContent from "components/Main/BasketContent";
import BasketFooter from "components/Main/BasketFooter";
import Container from "./Container";

const temp_item = [1, 3, 10];

const Basket = () => {
  return (
    <Container>
      <Header />
      <BasketContent products={temp_item} />
      <BasketFooter />
    </Container>
  );
};

export default Basket;
