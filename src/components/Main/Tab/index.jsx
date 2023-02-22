// import { useRef } from "react";
import { useState } from "react";
import Panel from "./Panel";
import PanelDetail from "./Panel/PanelDetail";
import PanelReview from "./Panel/PanelReview";
import TabItem from "./TabItem";
import TabList from "./TabList";

const tabName = {
  detail: "상품 설명",
  review: "상품 후기",
};

const Tab = ({ mainImage, productId }) => {
  const tabs = [
    {
      id: "tab-1",
      name: tabName.detail,
      children: <PanelDetail imgUrl={mainImage} desc={tabName.detail} />,
    },
    {
      id: "tab-2",
      name: tabName.review,
      children: <PanelReview productId={productId} />,
    },
  ];

  const [currentItem, setCurrentItem] = useState(tabs[0].id);

  return (
    <>
      <TabList role="tablist">
        {tabs.map(({ id, name }) => (
          <TabItem
            isSelected={currentItem === id}
            id={id}
            key={id}
            onClick={(e) => {
              e.preventDefault();
              setCurrentItem(id);
            }}
          >
            {name}
          </TabItem>
        ))}
      </TabList>
      {tabs.map(({ id, children }) => (
        <Panel
          panelId={id}
          isSelected={currentItem === id}
          role="tabpanel"
          key={id}
        >
          {children}
        </Panel>
      ))}
    </>
  );
};

export default Tab;
