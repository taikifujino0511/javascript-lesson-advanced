// ここにコードを書きながら確認しましょう！

function totalPrice(price, tax = 1.10) {
  return price * tax;
}

console.log(totalPrice(1000, 1.10)); // 1100
console.log(totalPrice(1000)); // 1100










// 練習問題
// 問題 1
/**
 * 
 * @param {number} price 価格
 * @param {number} rate 値引率 %表記
 * @returns 割引後の値段
 */
function discountRateCalc(price, rate = 5) { 
  return price * (1 - rate * 0.01);
}

console.log(discountRateCalc(4500));
console.log(discountRateCalc(6000, 20))
