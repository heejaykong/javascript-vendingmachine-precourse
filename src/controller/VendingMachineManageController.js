import { $ } from '../utils/dom.js';
import {
  getLocalStorage,
  getLocalStorage__Coins,
  setLocalStorage,
  addToCurrentState,
} from '../utils/commonLogics.js';
import { ID, CLASS, ERROR_MSG, COINS_INITIAL_STATE } from '../utils/constants.js';
import { template as vendingMachineManageTemplate } from '../view/templates/vending-machine-manage.js';

export default class VendingMachineManageController {
  constructor() {
    this.chargedChange = COINS_INITIAL_STATE;
    this.init();
  }

  init = () => {
    $(`${ID.MAIN}`).innerHTML = vendingMachineManageTemplate;
    this.chargedChange = getLocalStorage__Coins('chargedChange');
    console.log(this.chargedChange);
  };
}
