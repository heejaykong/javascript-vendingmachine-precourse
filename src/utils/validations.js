import { RULES } from '../utils/constants.js';

export const ValidateHelper = {
  productAdd: (name, price, quantity, currentStateArr) => {
    if (isNotUnique(name, currentStateArr)) {
      return false;
    }
    if (isSmallerThanMinPrice(price)) {
      return false;
    }
    if (cannotBeDividedByMinUnit(price)) {
      return false;
    }
    if (isSmallerThanMinQuantity(quantity)) {
      return false;
    }
    return true;
  },
  vendingMachineManage: (chargeInput) => {
    if (isSmallerThanMinUnit(chargeInput)) {
      return false;
    }
    if (cannotBeDividedByMinUnit(chargeInput)) {
      return false;
    }
    return true;
  },
  productPurchase: (chargeInput) => {
    if (isSmallerThanMinUnit(chargeInput)) {
      return false;
    }
    if (cannotBeDividedByMinUnit(chargeInput)) {
      return false;
    }
    return true;
  },
};

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
