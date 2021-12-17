import { ID } from '../../utils/constants.js';

export const template = `
  <h3>자판기 동전 충전하기</h3>
  <form>
    <input
      type="number"
      id=${ID.VENDING_MACHINE_CHARGE_INPUT}
      placeholder="자판기가 보유할 금액"
      required
    />
    <button type="submit" id=${ID.VENDING_MACHINE_CHARGE_BTN}>충전하기</button>
  </form>
  <p>보유 금액: <span id=${ID.VENDING_MACHINE_CHARGE_AMOUNT}></span></p>

  <h3>자판기가 보유한 동전</h3>
  <table>
    <tr>
      <th>동전</th>
      <th>개수</th>
    </tr>
    <tr>
      <td>500원</td>
      <td id=${ID.VENDING_MACHINE_COIN_500_QUANTITY}></td>
    </tr>
    <tr>
      <td>100원</td>
      <td id=${ID.VENDING_MACHINE_COIN_100_QUANTITY}></td>
    </tr>
    <tr>
      <td>50원</td>
      <td id=${ID.VENDING_MACHINE_COIN_50_QUANTITY}></td>
    </tr>
    <tr>
      <td>10원</td>
      <td id=${ID.VENDING_MACHINE_COIN_10_QUANTITY}></td>
    </tr>
  </table>
`;
