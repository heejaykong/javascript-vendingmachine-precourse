import { $ } from '../utils/dom.js';
import {
  getLocalStorage__Amount,
  getLocalStorage__Coins,
  setLocalStorage,
  getLocalStorage,
  updateAvailableProducts,
  subtractCurrentCoins,
} from '../utils/commonLogics.js';
import { ID, ERROR_MSG, COINS_INITIAL_STATE } from '../utils/constants.js';
import { ValidateHelper } from '../utils/validations.js';
import { template as productPurchaseTemplate } from '../view/templates/product-purchase.js';
import {
  paintUserCharge,
  paintAvailableProductList,
  paintCoinsReturn,
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

    paintUserCharge(this.userCharge);
    paintAvailableProductList(this.availableProducts);

    $('form').addEventListener('submit', this.handleProductPurchaseSubmit);
    $('table').addEventListener('click', this.handleTableClick);
    $(`#${ID.COIN_RETURN_BTN}`).addEventListener('click', this.handleCoinReturnClick);
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

  handleTableClick = (e) => {
    const clickedRow = e.target.closest('.product-purchase-item');
    const targetName = clickedRow.children[0].dataset.productName;
    const targetPrice = clickedRow.children[1].dataset.productPrice;
    const targetQuantity = clickedRow.children[2].dataset.productQuantity;
    this.purchase(targetName, targetPrice, targetQuantity);
  };

  purchase = (name, price, quantity) => {
    const isValid = this.validatePurchase(price, quantity);
    if (!isValid) {
      alert(ERROR_MSG.PRODUCT_PURCHASE);
    }
    if (isValid) {
      const newProductsState = updateAvailableProducts(this.availableProducts, name);
      this.userCharge -= price;

      paintUserCharge(this.userCharge);
      $(`tbody`).innerHTML = '';
      paintAvailableProductList(newProductsState);

      setLocalStorage('products', newProductsState);
      setLocalStorage('userCharge', this.userCharge);
    }
  };

  validatePurchase = (price, quantity) => {
    if (price > this.userCharge) {
      return false;
    }
    if (quantity <= 0) {
      return false;
    }
    return true;
  };

  handleCoinReturnClick = () => {
    const currentCharges = getLocalStorage__Coins('chargedChange');
    for (let i = 0; i < currentCharges.length; i++) {
      if (this.userCharge <= 0) break;
      const obj = currentCharges[i];
      const currentUserCharge = this.userCharge;
      const coinCount = Math.min(
        parseInt(currentUserCharge / obj.coinType),
        obj.quantity
      );

      this.userCharge -= obj.coinType * coinCount;
      paintCoinsReturn(obj.coinType, coinCount);
      const updatedCoins = subtractCurrentCoins(
        currentCharges,
        obj.coinType,
        coinCount
      );
      setLocalStorage('userCharge', this.userCharge);
      setLocalStorage('chargedChange', updatedCoins);
    }
    paintUserCharge(this.userCharge);
  };
}
