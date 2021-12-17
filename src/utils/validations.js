import { RULES } from '../utils/constants.js';

export const isNotUnique = (newName, products) => {
  const currentNames = products.map((obj) => obj.name);
  return currentNames.includes(newName);
};
export const isSmallerThanMinPrice = (price) => {
  return price < RULES.MIN_PRICE;
};
export const isSmallerThanMinUnit = (price) => {
  return price < RULES.MIN_PRICE_UNIT;
};
export const cannotBeDividedByMinUnit = (price) => {
  return price % RULES.MIN_PRICE_UNIT;
};
export const isSmallerThanMinQuantity = (quantity) => {
  return quantity < RULES.MIN_QUANTITY;
};
