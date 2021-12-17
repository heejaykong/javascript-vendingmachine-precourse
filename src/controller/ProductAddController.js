import { $ } from '../utils/dom.js';
import {
  getLocalStorage,
  setLocalStorage,
  addToCurrentState,
} from '../utils/commonLogics.js';
import { createProduct } from '../utils/commonLogics.js';
import { ID, CLASS, ERROR_MSG } from '../utils/constants.js';
import { template as productAddTemplate } from '../view/templates/product-add.js';
import { clearInputs, paintProductList, paintProduct } from '../view/InputView.js';
import {
  isNotUnique,
  isSmallerThanMinPrice,
  cannotBeDividedByMinUnit,
  isSmallerThanMinQuantity,
} from '../utils/validations.js';

export default class ProductAddController {
  constructor() {
    this.products = [];
    this.init();
  }

  init = () => {
    $(`${ID.MAIN}`).innerHTML = productAddTemplate;
    this.products = getLocalStorage('products');
    paintProductList(this.products);
    $('form').addEventListener('submit', this.handleProductAddSubmit);
  };

  handleProductAddSubmit = (e) => {
    e.preventDefault();
    this.$nameInput = $(`#${ID.PRODUCT_NAME_INPUT}`);
    this.$priceInput = $(`#${ID.PRODUCT_PRICE_INPUT}`);
    this.$quantityInput = $(`#${ID.PRODUCT_QUANTITY_INPUT}`);
    this.validate(
      this.$nameInput.value,
      this.$priceInput.value,
      this.$quantityInput.value
    );
  };

  validate = (name, price, quantity) => {
    const isValid = this.validateHelper(name, price, quantity);
    if (!isValid) {
      alert(ERROR_MSG.PRODUCT_ADD);
    }
    if (isValid) {
      const newProduct = createProduct(name, price, quantity);
      paintProduct(newProduct);
      const updatedProducts = addToCurrentState(this.products, newProduct);
      setLocalStorage('products', updatedProducts);
      clearInputs([this.$nameInput, this.$priceInput, this.$quantityInput]);
    }
  };

  validateHelper = (name, price, quantity) => {
    if (isNotUnique(name, this.products)) {
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
  };
}
