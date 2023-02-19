import Header from "../components/Header";
import ItemList from "../components/Header/ItemList";
import Container from "./Container";

const Home = () => {
  return (
    <Container>
      <Header />
      <ItemList />
    </Container>
  );
};

export default Home;
