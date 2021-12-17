import { ID } from '../../utils/constants.js';

export const template = `
  <h1>🥤자판기🥤</h1>
  <div id=${ID.MENU_BAR}>
    <button id=${ID.PRODUCT_ADD_MENU}>상품 관리</button>
    <button id=${ID.VENDING_MACHINE_MANAGE_MENU}>잔돈 충전</button>
    <button id=${ID.PRODUCT_PURCHASE_MENU}>상품 구매</button>
  </div>
  <main id=${ID.MAIN}></main>
`;
