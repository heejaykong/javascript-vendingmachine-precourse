// import { $, ID } from '../utils/constants.js';

export const paintProductList = (products) => {
  products.map((product) => paintProduct(product));
};
export const paintProduct = ({ name, price, quantity }) => {
  console.log(name, price, quantity);
};

export const clearInputs = (inputElements) => {
  inputElements.map((el) => {
    el.value = '';
  });
};
