import Card from "./Card";
import Wrap from "./Wrap";

const temp_items = [
  {
    item_id: 0,
    title: "비숑 블랙 머그잔",
    desc: "쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다.",
    url: "https://raw.githubusercontent.com/congchu/comento-shop-server/master/assets/images/product1.jpg",
  },
  {
    item_id: 1,
    title: "가열 보온 티코스터 온열 원터치 컵 받침대",
    desc: "언제나 따뜻하게 최대 12시간 동안 최대 60도의 온도로 따듯한 차를 즐길 수 있습니다.",
    url: "https://raw.githubusercontent.com/congchu/comento-shop-server/master/assets/images/product2.jpg",
  },
  {
    item_id: 2,
    title: "벨루즈까사 솜사탕 파스텔 머그 4종 세트",
    desc: "솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그",
    url: "https://raw.githubusercontent.com/congchu/comento-shop-server/master/assets/images/product3.jpg",
  },
];

const ItemList = () => {
  return (
    <Wrap>
      {temp_items.map(({ item_id, title, desc, url }) => (
        <Card linkTo="/" title={title} imgUrl={url} key={item_id} />
      ))}
    </Wrap>
  );
};

export default ItemList;
