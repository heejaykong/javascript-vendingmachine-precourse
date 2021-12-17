import { $ } from '../utils/dom.js';
import { getLocalStorage, setLocalStorage } from '../utils/commonLogics.js';
import { ID, INDEX, CLASS, ERROR_MSG } from '../utils/constants.js';
import { template as menuBarTemplate } from '../view/templates/menu-bar.js';
import ProductAddController from '../controller/ProductAddController.js';
import VendingMachineManageController from '../controller/VendingMachineManageController.js';
import ProductPurchaseController from '../controller/ProductPurchaseController.js';

export default class MenuBarController {
  constructor() {
    this.recentMenu;
    this.init();
  }

  init = () => {
    this.recentMenu = getLocalStorage('recentMenu');
    $(`#${ID.APP}`).innerHTML = menuBarTemplate;
    this.loadRecentMenu(this.recentMenu);
    $(`#${ID.MENU_BAR}`).addEventListener('click', this.handleMenuBarClick);
  };

  loadRecentMenu = (recentMenu) => {
    if (recentMenu === INDEX.PRODUCT_ADD_MENU) {
      new ProductAddController();
    }
    if (recentMenu === INDEX.VENDING_MACHINE_MANAGE_MENU) {
      new VendingMachineManageController();
    }
    if (recentMenu === INDEX.PRODUCT_PURCHASE_MENU) {
      new ProductPurchaseController();
    }
  };

  handleMenuBarClick = (e) => {
    let clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;
    this.initMenu(clickedBtn.id);
  };

  initMenu = (btnId) => {
    if (btnId === ID.PRODUCT_ADD_MENU) {
      new ProductAddController();
      setLocalStorage('recentMenu', INDEX.PRODUCT_ADD_MENU);
    }
    if (btnId === ID.VENDING_MACHINE_MANAGE_MENU) {
      new VendingMachineManageController();
      setLocalStorage('recentMenu', INDEX.VENDING_MACHINE_MANAGE_MENU);
    }
    if (btnId === ID.PRODUCT_PURCHASE_MENU) {
      new ProductPurchaseController();
      setLocalStorage('recentMenu', INDEX.PRODUCT_PURCHASE_MENU);
    }
  };
}
