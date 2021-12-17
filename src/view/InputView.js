import { $ } from '../utils/dom.js';
import { CLASS } from '../utils/constants.js';

export const paintProductList = (products) => {
  products.map((product) => paintProduct(product));
};
export const paintProduct = ({ name, price, quantity }) => {
  const $table = $(`table`);
  const $tr = document.createElement('tr');
  $tr.id = CLASS.PRODUCT_MANAGE_ITEM;
  $tr.innerHTML = `
    <td id=${CLASS.PRODUCT_MANAGE_NAME}>${name}</td>
    <td id=${CLASS.PRODUCT_MANAGE_PRICE}>${price}</td>
    <td id=${CLASS.PRODUCT_MANAGE_QUANTITY}>${quantity}</td>
  `;
  $table.appendChild($tr);
};

export const clearInputs = (inputElements) => {
  inputElements.map((el) => {
    el.value = '';
  });
};
