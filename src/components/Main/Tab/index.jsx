// import { useRef } from "react";
import { useState } from "react";
import TabItem from "./TabItem";
import TabList from "./TabList";

const tabs = [
  { id: "tab-1", name: "상품 설명" },
  { id: "tab-2", name: "상품 후기" },
];

const Tab = () => {
  const [currentItem, setCurrentItem] = useState("tab-1");

  return (
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
  );
};

export default Tab;
