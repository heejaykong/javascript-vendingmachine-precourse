import { $ } from '../utils/dom.js';
import {
  getLocalStorage,
  getLocalStorage__Coins,
  setLocalStorage,
  addToCurrentState,
  updateCurrentCoins,
} from '../utils/commonLogics.js';
import {
  ID,
  CLASS,
  ERROR_MSG,
  COINS_INITIAL_STATE,
  COIN_TYPES_ARR,
} from '../utils/constants.js';
import { template as vendingMachineManageTemplate } from '../view/templates/vending-machine-manage.js';
import { ValidateHelper } from '../utils/validations.js';
import { clearInputs } from '../view/InputView.js';

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

  validate = (charge) => {
    const isValid = ValidateHelper.vendingMachineManage(charge);
    if (!isValid) {
      alert(ERROR_MSG.VENDING_MACHINE_MANAGE);
    }
    if (isValid) {
      this.generateRandomCoins(charge);
    }
  };

  generateRandomCoins = (chargeInput) => {
    const coinTypes = COIN_TYPES_ARR;
    const randomCoinType = MissionUtils.Random.pickNumberInList(coinTypes);
    // console.log('randomCoinType');
    // console.log(randomCoinType);
    for (let i = coinTypes.indexOf(randomCoinType); i < coinTypes.length; i++) {
      if (chargeInput <= 0) {
        break;
      }
      let currentCount = 0;
      currentCount += parseInt(chargeInput / coinTypes[i]);
      chargeInput %= coinTypes[i];
      const updatedChargedChange = updateCurrentCoins(
        this.chargedChange,
        coinTypes[i],
        currentCount
      );
      console.log(updatedChargedChange);
      // setLocalStorage('chargedChange', updatedChargedChange);
      // clearInputs([this.$chargeInput]);
    }
  };
}
