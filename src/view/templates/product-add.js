import { ID } from '../../utils/constants.js';

export const template = `
  <h3>상품 추가하기</h3>
  <form>
    <input
      type="text"
      id=${ID.PRODUCT_NAME_INPUT}
      placeholder="상품명"
      required
    />
    <input
      type="number"
      id=${ID.PRODUCT_PRICE_INPUT}
      placeholder="가격"
      required
    />
    <input
      type="number"
      id=${ID.PRODUCT_QUANTITY_INPUT}
      placeholder="수량"
      required
    />
    <button type="submit" id=${ID.PRODUCT_ADD_BTN}>추가하기</button>
  </form>

  <h3>상품 현황</h3>
  <table>
    <tr>
      <th>상품명</th>
      <th>가격</th>
      <th>수량</th>
    </tr>
  </table>
`;
