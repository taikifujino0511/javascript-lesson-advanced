// ここにコードを書きながら確認しましょう！

const arraytest = [2, 4, 6, 8, 10];

const newArray = arraytest.map(val => val * 2);

console.log(newArray);
// [4, 8, 12, 16, 20]








// 練習問題
// 問題 1
const array = [
  {
    tag: 'p',
    className: 'hoge',
  },
  {
    tag: 'div',
    className: 'fuga',
  },
  {
    tag: 'h1',
    className: 'piyo',
  },
];

const newClassname = array.map(object => ({tag: object.tag, className: `c-${object.className}`}));
console.log(newClassname)
