import { $ } from './utils/dom.js';
import MenuBarController from './controller/MenuBarController.js';

export default class VendingMachineApp {
  constructor() {
    this.init();
  }

  init = () => {
    new MenuBarController();
  };
}
