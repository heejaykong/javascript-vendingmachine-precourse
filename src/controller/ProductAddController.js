import { $, getLocalStorage, setLocalStorage } from '../utils/dom.js';
import { ID, CLASS, ERROR_MSG } from '../utils/constants.js';
import { template as productAddTemplate } from '../view/templates/product-add.js';
import { clearInputs, paintProductList } from '../view/InputView.js';
import {} from '../utils/validations.js';

export default class ProductAddController {
  constructor() {
    this.products = [];
    this.init();
  }

  init = () => {
    $(`${ID.MAIN}`).innerHTML = productAddTemplate;
    this.products = getLocalStorage('products');
    // paintProductList(this.products);
    $('form').addEventListener('submit', this.handleProductAddSubmit);
  };

  handleProductAddSubmit = (e) => {
    e.preventDefault();
    const $nameInput = $(`#${ID.PRODUCT_NAME_INPUT}`);
    const $priceInput = $(`#${ID.PRODUCT_PRICE_INPUT}`);
    const $quantityInput = $(`#${ID.PRODUCT_QUANTITY_INPUT}`);
    // console.log($nameInput.value);
    // this.validate($nameInput.value, $priceInput.value, $quantityInput.value);
    clearInputs([$nameInput, $priceInput, $quantityInput]);
  };
}
