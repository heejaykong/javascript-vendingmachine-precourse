import { $ } from '../utils/dom.js';
import { ID, CLASS } from '../utils/constants.js';

// product add
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

// vending machine manage
export const paintCoins = (coinsState) => {
  coinsState.map(({ coinType, quantity }) => {
    if (coinType === 500)
      $(`#${ID.VENDING_MACHINE_COIN_500_QUANTITY}`).innerHTML = quantity;
    if (coinType === 100)
      $(`#${ID.VENDING_MACHINE_COIN_100_QUANTITY}`).innerHTML = quantity;
    if (coinType === 50)
      $(`#${ID.VENDING_MACHINE_COIN_50_QUANTITY}`).innerHTML = quantity;
    if (coinType === 10)
      $(`#${ID.VENDING_MACHINE_COIN_10_QUANTITY}`).innerHTML = quantity;
  });
};
export const paintTotalAmount = (coinsState) => {
  let totalAmount = 0;
  coinsState.map(({ coinType, quantity }) => {
    totalAmount += coinType * quantity;
  });
  $(`#${ID.VENDING_MACHINE_CHARGE_AMOUNT}`).innerHTML = `${totalAmount}원`;
};
