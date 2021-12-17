import Product from '../model/Product.js';
import { COINS_INITIAL_STATE } from './constants.js';

// 0. 공통
export const getLocalStorage = (LS_KEY) => {
  const loaded = localStorage.getItem(LS_KEY);
  if (!loaded) return [];
  return JSON.parse(loaded);
};
export const getLocalStorage__Coins = (LS_KEY) => {
  const loaded = localStorage.getItem(LS_KEY);
  if (!loaded) return COINS_INITIAL_STATE;
  return JSON.parse(loaded);
};
export const getLocalStorage__Amount = (LS_KEY) => {
  const loaded = localStorage.getItem(LS_KEY);
  if (!loaded) return 0;
  return JSON.parse(loaded);
};

export const setLocalStorage = (LS_KEY, value) => {
  localStorage.setItem(LS_KEY, JSON.stringify(value));
};

export const addToCurrentState = (currentStateArr, item) => {
  currentStateArr.push(item);
  return currentStateArr;
};

// 1. 상품 관리 탭
export const createProduct = (name, price, quantity) => {
  return new Product(name, price, quantity);
};

// 2. 잔돈 충전 탭
export const updateCurrentCoins = (currentStateArr, coinType, quantity) => {
  currentStateArr.map((obj) => {
    if (obj.coinType === coinType) {
      obj.quantity += quantity;
    }
  });
  return currentStateArr;
};

// 3. 상품 구매 탭
