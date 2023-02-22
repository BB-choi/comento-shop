import TabLink from "./TabLink";
import TabListItem from "./TabLisItem";

const TabItem = ({ isSelected, children, onClick }) => {
  return (
    <TabListItem role="tab" aria-selected={isSelected}>
      <TabLink to="#" onClick={onClick}>
        {children}
      </TabLink>
    </TabListItem>
  );
};

export default TabItem;
