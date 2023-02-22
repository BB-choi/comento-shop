import TabLink from "./TabLink";
import TabListItem from "./TabLisItem";

const TabItem = ({ isSelected, children, onClick, id }) => {
  return (
    <TabListItem role="tab" aria-selected={isSelected} aria-controls={id}>
      <TabLink to="#" onClick={onClick}>
        {children}
      </TabLink>
    </TabListItem>
  );
};

export default TabItem;
