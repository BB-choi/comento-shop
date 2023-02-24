const CART = "CART";

const getItems = (key) => {
  const items = localStorage.getItem(key);

  return JSON.parse(items) || [];
};

const hasSameItem = (items, item) => {
  return items.includes(item);
};

const addItem = (item, itemKey) => {
  const items = getItems(itemKey);

  if (hasSameItem(items, item)) {
    return false;
  }

  localStorage.setItem(itemKey, JSON.stringify([...items, item]));
  return true;
};

const getBasket = () => {
  return getItems(CART);
};

const addBasket = (productId) => {
  if (!addItem(productId, CART)) {
    return false;
  }

  return true;
};

const removeBasket = (productId) => {
  const currentItems = getItems(CART);

  localStorage.setItem(
    CART,
    JSON.stringify(currentItems.filter((item) => item !== productId))
  );
};

export { getBasket, addBasket, removeBasket };
