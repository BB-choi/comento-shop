import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addBasket } from "utils/webStorage";
import ProductButton from "../components/common/ProductButton";
import Header from "../components/Header";
import ProductInfo from "../components/Main/ProductInfo";
import ProductThumbnail from "../components/Main/ProductThumbnail";
import Tab from "../components/Main/Tab";
import { getProductDetail } from "../data/mockData";
import Container from "./Container";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();

  const onClickAddBasketButton = () => {
    if (!addBasket(productId)) {
      alert("이미 장바구니에 있는 상품입니다.");
    }

    navigate("/basket");
  };

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
        <Tab mainImage={mainImage} productId={productId} />
        <ProductButton onClick={onClickAddBasketButton} sticky>
          장바구니 담기
        </ProductButton>
      </>
    </Container>
  );
};

export default ProductDetail;
