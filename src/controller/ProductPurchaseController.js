import { $ } from '../utils/dom.js';
import {
  getLocalStorage,
  setLocalStorage,
  addToCurrentState,
} from '../utils/commonLogics.js';
import { ID, CLASS, ERROR_MSG } from '../utils/constants.js';
import { template as productPurchaseTemplate } from '../view/templates/product-purchase.js';

export default class ProductPurchaseController {
  constructor() {
    this.init();
  }

  init = () => {
    $(`${ID.MAIN}`).innerHTML = productPurchaseTemplate;
  };
}
