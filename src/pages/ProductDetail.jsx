import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductInfo from "../components/Main/ProductInfo";
import ProductThumbnail from "../components/Main/ProductThumbnail";
import Tab from "../components/Main/Tab";
import { getProductDetail } from "../data/mockData";
import Container from "./Container";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => setProduct(getProductDetail(productId)), [productId]);

  if (!product) {
    return null;
  }

  const { thumbnail, name, price, mainImage } = product;

  return (
    <Container>
      <Header />
      <>
        <ProductThumbnail src={thumbnail} alt={name} />
        <ProductInfo name={name} price={price} />
        <Tab />
      </>
    </Container>
  );
};

export default ProductDetail;
