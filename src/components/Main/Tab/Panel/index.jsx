import Wrap from "./Wrap";

const Panel = ({ children, isSelected, role, panelId }) => {
  return (
    <Wrap aria-labelledby={panelId} aria-expanded={isSelected} role={role}>
      {children}
    </Wrap>
  );
};

export default Panel;
