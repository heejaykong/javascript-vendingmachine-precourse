import { $ } from '../utils/dom.js';
import {
  getLocalStorage__Coins,
  setLocalStorage,
  updateCurrentCoins,
} from '../utils/commonLogics.js';
import {
  ID,
  ERROR_MSG,
  COINS_INITIAL_STATE,
  COIN_TYPES_ARR,
} from '../utils/constants.js';
import { template as vendingMachineManageTemplate } from '../view/templates/vending-machine-manage.js';
import { ValidateHelper } from '../utils/validations.js';
import { clearInputs, paintCoins, paintTotalAmount } from '../view/InputView.js';

export default class VendingMachineManageController {
  constructor() {
    this.chargedChange = COINS_INITIAL_STATE;
    this.init();
  }

  init = () => {
    $(`${ID.MAIN}`).innerHTML = vendingMachineManageTemplate;
    this.chargedChange = getLocalStorage__Coins('chargedChange');
    paintCoins(this.chargedChange);
    paintTotalAmount(this.chargedChange);
    $('form').addEventListener('submit', this.handleChangeChargeSubmit);
  };

  handleChangeChargeSubmit = (e) => {
    e.preventDefault();
    this.$chargeInput = $(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`);
    this.validate(this.$chargeInput.value);
  };

  validate = (charge) => {
    const isValid = ValidateHelper.vendingMachineManage(charge);
    if (!isValid) {
      alert(ERROR_MSG.VENDING_MACHINE_MANAGE);
    }
    if (isValid) {
      const updatedCoins = this.generateRandomCoins(charge);
      paintCoins(updatedCoins);
      paintTotalAmount(updatedCoins);
      setLocalStorage('chargedChange', updatedCoins);
      clearInputs([this.$chargeInput]);
    }
  };

  generateRandomCoins = (chargeInput) => {
    let updatedCoins;
    const coinTypes = COIN_TYPES_ARR;
    const randomCoinType = MissionUtils.Random.pickNumberInList(coinTypes);
    for (let i = coinTypes.indexOf(randomCoinType); i < coinTypes.length; i++) {
      if (chargeInput <= 0) {
        break;
      }
      let currentCount = 0;
      currentCount += parseInt(chargeInput / coinTypes[i]);
      chargeInput %= coinTypes[i];
      updatedCoins = updateCurrentCoins(this.chargedChange, coinTypes[i], currentCount);
    }
    return updatedCoins;
  };
}
