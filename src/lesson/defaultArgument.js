// ここにコードを書きながら確認しましょう！

function totalPrice(price, tax = 1.10) {
  return price * tax;
}

console.log(totalPrice(1000, 1.10)); // 1100
console.log(totalPrice(1000)); // 1100










// 練習問題
// 問題 1
function discountRateCalc(price, rate = 0.05) {
  return price * (1 - rate * 0.01);
}

console.log(discountRateCalc(4500));
console.log(discountRateCalc(6000, 0.2))
