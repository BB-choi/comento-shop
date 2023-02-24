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
    return;
  }

  localStorage.setItem(itemKey, JSON.stringify([...items, item]));
};

const addBasket = (productId) => {
  addItem(productId, CART);
};

const removeBasket = (productId) => {
  const currentItems = getItems(CART);

  localStorage.setItem(
    CART,
    JSON.stringify(currentItems.filter((item) => item !== productId))
  );
};

export { addBasket, removeBasket };
