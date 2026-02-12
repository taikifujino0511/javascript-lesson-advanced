// ここにコードを書きながら確認しましょう！

// Promiseを使用して非同期処理を関数化するパターン

const setTimeoutFn = time => new Promise(resolve => setTimeout(resolve, time));

console.log('1番目の処理');

setTimeoutFn(2000)
  .then(() => console.log('2番目の処理'))
  .then(() => setTimeoutFn(1000))
  .then(() => console.log('3番目の処理'))
  .then(() => setTimeoutFn(1000))
  .then(() => console.log('4番目の処理'))
  .then(() => setTimeoutFn(1000))
  .then(() => console.log('5番目の処理'));








// 練習問題
// 問題 1

const returnPromise = () => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject('エラーが発生しました');
    }, 3000);
  });
};

returnPromise().catch((e) => {
  console.log(e);
});
