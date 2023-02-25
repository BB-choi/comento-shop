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

const removeAll = (key) => {
  localStorage.removeItem(key);
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

const removeBasketItem = (productId) => {
  const currentItems = getItems(CART);

  localStorage.setItem(
    CART,
    JSON.stringify(currentItems.filter((item) => item !== productId))
  );
};

const removeBasket = () => {
  removeAll(CART);
};

export { getBasket, addBasket, removeBasketItem, removeBasket };
