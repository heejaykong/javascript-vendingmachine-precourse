import { $ } from '../utils/dom.js';
import {
  getLocalStorage,
  setLocalStorage,
  addToCurrentState,
} from '../utils/commonLogics.js';
import { ID, CLASS, ERROR_MSG, COINS_INITIAL_STATE } from '../utils/constants.js';
import { ValidateHelper } from '../utils/validations.js';
import { template as productPurchaseTemplate } from '../view/templates/product-purchase.js';

export default class ProductPurchaseController {
  constructor() {
    this.userCharge;
    this.coinReturn = COINS_INITIAL_STATE;
    this.init();
  }

  init = () => {
    $(`${ID.MAIN}`).innerHTML = productPurchaseTemplate;
    this.userCharge = getLocalStorage('userCharge');
    // TODO: paint all the things
    $('form').addEventListener('submit', this.handleProductPurchaseSubmit);
  };

  handleProductPurchaseSubmit = (e) => {
    e.preventDefault();
    this.$userChargeInput = $(`#${ID.CHARGE_INPUT}`);
    this.validate(this.$userChargeInput.value);
  };
  validate = (charge) => {
    // 여기부터 하기~
    const isValid = ValidateHelper.productPurchase(charge);
    if (!isValid) {
      alert(ERROR_MSG.PRODUCT_PURCHASE);
    }
    if (isValid) {
      // const updatedCoins = this.generateRandomCoins(charge);
      // paintCoins(updatedCoins);
      // paintTotalAmount(updatedCoins);
      // setLocalStorage('chargedChange', updatedCoins);
      // clearInputs([this.$chargeInput]);
    }
  };
}
