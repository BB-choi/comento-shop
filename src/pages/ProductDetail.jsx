import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Container from "./Container";

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <Container>
      <Header />
      <p>{productId}</p>
    </Container>
  );
};

export default ProductDetail;
