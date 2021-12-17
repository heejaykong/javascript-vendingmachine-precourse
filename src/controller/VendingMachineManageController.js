import { $ } from '../utils/dom.js';
import {
  getLocalStorage,
  setLocalStorage,
  addToCurrentState,
} from '../utils/commonLogics.js';
import { ID, CLASS, ERROR_MSG } from '../utils/constants.js';
import { template as vendingMachineManageTemplate } from '../view/templates/vending-machine-manage.js';

export default class VendingMachineManageController {
  constructor() {
    this.init();
  }

  init = () => {
    $(`${ID.MAIN}`).innerHTML = vendingMachineManageTemplate;
  };
}
