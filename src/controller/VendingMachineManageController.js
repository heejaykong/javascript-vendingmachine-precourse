import { $ } from '../utils/dom.js';
import {
  getLocalStorage,
  getLocalStorage__Coins,
  setLocalStorage,
  addToCurrentState,
} from '../utils/commonLogics.js';
import { ID, CLASS, ERROR_MSG, COINS_INITIAL_STATE } from '../utils/constants.js';
import { template as vendingMachineManageTemplate } from '../view/templates/vending-machine-manage.js';
import { ValidateHelper } from '../utils/validations.js';

export default class VendingMachineManageController {
  constructor() {
    this.chargedChange = COINS_INITIAL_STATE;
    this.init();
  }

  init = () => {
    $(`${ID.MAIN}`).innerHTML = vendingMachineManageTemplate;
    this.chargedChange = getLocalStorage__Coins('chargedChange');
    // TODO: paint chargedChange
    $('form').addEventListener('submit', this.handleChangeChargeSubmit);
  };

  handleChangeChargeSubmit = (e) => {
    e.preventDefault();
    this.$chargeInput = $(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`);
    this.validate(this.$chargeInput.value);
  };

  validate = (price) => {
    const isValid = ValidateHelper.vendingMachineManage(price);
    if (!isValid) {
      alert(ERROR_MSG.VENDING_MACHINE_MANAGE);
    }
  };
}
