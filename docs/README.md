# 프로그램 소개

최소한의 동전을 반환하는 자판기입니다.

# ✅ 기능 목록

### [탭 메뉴]

1. 각 탭에 따라 다른 템플릿을 그려주기

- 상품 관리 탭(자판기가 보유하고 있는 상품을 추가하는 기능을 수행)
- 잔돈 충전 탭(자판기가 보유할 금액을 충전하는 기능을 수행)
- 상품 구매 탭(사용자가 금액을 투입할 수 있으며, 투입한 금액에 맞춰 상품을 구매하고, 남은 금액에 대해서는 잔돈을 반환하는 기능을 수행)

2. 상품 관리 탭

- 최초 상품 목록 초기화
- 상품명, 가격, 수량을 입력해 상품을 추가할 수 있다.
- 상품명, 가격, 수량 입력 시 예외처리
  - 상품 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 함
- 사용자는 추가한 상품을 테이블로 확인할 수 있다.

3. 잔돈 충전 탭

- 자판기가 최초 보유한 금액 초기화
  - 보유 금액 0원이며, 각 동전의 개수는 0개이다.
- 잔돈 충전 입력 요소에 충전할 금액을 입력한 후, 충전하기 버튼을 눌러 자판기 보유 금액을 충전할 수 있다.
  - 자판기 보유 금액은 {금액}원 형식으로 나타낸다.
- 자판기 보유 금액만큼의 동전이 무작위로 생성된다.
  - 동전의 개수는 {개수}개 형식으로 나타낸다.
- 자판기 보유 금액을 누적하여 충전할 수 있다. 추가 충전 금액만큼의 동전이 무작위로 생성되어 기존 동전들에 더해진다.

4. 상품 구매 탭

- 사용자는 투입할 금액 입력 요소에 투입 금액을 입력한 후, 투입하기 버튼을 이용하여 금액을 투입한다.
  - 자판기가 보유한 금액은 {금액}원 형식으로 나타낸다.
- 투입 금액 예외처리
  - 금액은 10원으로 나누어 떨어지는 금액만 투입할 수 있다.
- 금액은 누적으로 투입할 수 있다.
- 사용자는 반환하기 버튼을 통해 잔돈을 반환 받을 수 있다.
  - 잔돈계산 모듈:
    - 잔돈을 돌려줄 때는 현재 보유한 최소 개수의 동전으로 잔돈을 돌려준다.
    - 지폐를 잔돈으로 반환하는 경우는 없다고 가정한다.
    - 잔돈을 반환할 수 없는 경우 잔돈으로 반환할 수 있는 금액만 반환한다.
    - 동전의 개수를 나타내는 정보는 {개수}개 형식으로 나타낸다.

5. 그 외

- 다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되어야 한다.
- localStorage를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다.
- 예외상황은 alert를 사용한다.