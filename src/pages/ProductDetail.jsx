import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductThumbnail from "../components/Main/ProductThumbnail";
import { getProductDetail } from "../data/mockData";
import Container from "./Container";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => setProduct(getProductDetail(productId)), [productId]);

  return (
    <Container>
      <Header />
      {product && (
        <ProductThumbnail src={product.thumbnail} alt={product.name} />
      )}
    </Container>
  );
};

export default ProductDetail;
