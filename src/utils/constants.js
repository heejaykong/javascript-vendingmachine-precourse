export const RULES = {
  MIN_PRICE: 100,
  MIN_PRICE_UNIT: 10,
  MIN_QUANTITY: 1,
};

export const ERROR_MSG = {
  PRODUCT_ADD: `상품 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.\n상품 수량은 1개 이상부터 입력 가능합니다.\n겹치지 않는 상품명을 입력해 주세요.`,
  VENDING_MACHINE_MANAGE: `충전 금액은 10원부터 시작하며, 10원으로 나누어 떨어져야 합니다.`,
  PRODUCT_PURCHASE: `투입 금액은 10원부터 시작하며, 10원으로 나누어 떨어져야 합니다.`,
};

export const INDEX = {
  PRODUCT_ADD_MENU: 0,
  VENDING_MACHINE_MANAGE_MENU: 1,
  PRODUCT_PURCHASE_MENU: 2,
};

export const ID = {
  APP: 'app',
  MAIN: 'main',
  // 탭 메뉴 버튼
  MENU_BAR: 'menu-bar',
  PRODUCT_PURCHASE_MENU: 'product-purchase-menu',
  VENDING_MACHINE_MANAGE_MENU: 'vending-machine-manage-menu',
  PRODUCT_ADD_MENU: 'product-add-menu',

  // 상품관리 메뉴
  PRODUCT_NAME_INPUT: 'product-name-input',
  PRODUCT_PRICE_INPUT: 'product-price-input',
  PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_ADD_BTN: 'product-add-button',

  // 잔돈충전 메뉴
  VENDING_MACHINE_CHARGE_INPUT: 'vending-machine-charge-input',
  VENDING_MACHINE_CHARGE_BTN: 'vending-machine-charge-button',
  VENDING_MACHINE_CHARGE_AMOUNT: 'vending-machine-charge-amount',
  VENDING_MACHINE_COIN_500_QUANTITY: 'vending-machine-coin-500-quantity',
  VENDING_MACHINE_COIN_100_QUANTITY: 'vending-machine-coin-100-quantity',
  VENDING_MACHINE_COIN_50_QUANTITY: 'vending-machine-coin-50-quantity',
  VENDING_MACHINE_COIN_10_QUANTITY: 'vending-machine-coin-10-quantity',

  // 상품구매 메뉴
  CHARGE_INPUT: 'charge-input',
  CHARGE_BTN: 'charge-button',
  CHARGE_AMOUNT: 'charge-amount',
  COIN_RETURN_BTN: 'coin-return-button',
  COIN_500_QUANTITY: 'coin-500-quantity',
  COIN_100_QUANTITY: 'coin-100-quantity',
  COIN_50_QUANTITY: 'coin-50-quantity',
  COIN_10_QUANTITY: 'coin-10-quantity',
};
export const CLASS = {
  // 상품관리 메뉴
  PRODUCT_MANAGE_ITEM: 'product-manage-item',
  PRODUCT_MANAGE_NAME: 'product-manage-name',
  PRODUCT_MANAGE_PRICE: 'product-manage-price',
  PRODUCT_MANAGE_QUANTITY: 'product-manage-quantity',

  // 상품구매 메뉴
  PRODUCT_PURCHASE_ITEM: 'product-purchase-item',
  PURCHASE_BTN: 'purchase-button',
  PRODUCT_PURCHASE_NAME: 'product-purchase-name',
  PRODUCT_PURCHASE_PRICE: 'product-purchase-price',
  PRODUCT_PURCHASE_QUANTITY: 'product-purchase-quantity',
};
export const DATASET = {
  // 상품구매 메뉴
  DATA_PRODUCT_NAME: 'data-product-name',
  DATA_PRODUCT_PRICE: 'data-product-price',
  DATA_PRODUCT_QUANTITY: 'data-product-quantity',
};
