import { $ } from '../utils/dom.js';
import {
  getLocalStorage__Amount,
  setLocalStorage,
  addToCurrentState,
  getLocalStorage,
} from '../utils/commonLogics.js';
import { ID, CLASS, ERROR_MSG, COINS_INITIAL_STATE } from '../utils/constants.js';
import { ValidateHelper } from '../utils/validations.js';
import { template as productPurchaseTemplate } from '../view/templates/product-purchase.js';
import {
  paintUserCharge,
  paintAvailableProductList,
  clearInputs,
} from '../view/InputView.js';

export default class ProductPurchaseController {
  constructor() {
    this.userCharge;
    this.coinReturn = COINS_INITIAL_STATE;
    this.availableProducts = [];
    this.init();
  }

  init = () => {
    $(`${ID.MAIN}`).innerHTML = productPurchaseTemplate;
    this.userCharge = getLocalStorage__Amount('userCharge');
    this.availableProducts = getLocalStorage('products');
    // TODO: paint all the things
    paintUserCharge(this.userCharge);
    paintAvailableProductList(this.availableProducts);
    $('form').addEventListener('submit', this.handleProductPurchaseSubmit);
  };

  handleProductPurchaseSubmit = (e) => {
    e.preventDefault();
    this.$userChargeInput = $(`#${ID.CHARGE_INPUT}`);
    this.validate(this.$userChargeInput.value);
  };
  validate = (charge) => {
    const isValid = ValidateHelper.productPurchase(charge);
    if (!isValid) {
      alert(ERROR_MSG.PRODUCT_PURCHASE);
    }
    if (isValid) {
      this.userCharge = parseInt(this.userCharge) + parseInt(charge);
      paintUserCharge(this.userCharge);
      setLocalStorage('userCharge', this.userCharge);
      clearInputs([this.$userChargeInput]);
    }
  };
}
