// ここにコードを書きながら確認しましょう！

const gizumo = {
  name: 'Gizumo',
  established: '2015年5月15日',
  place: 'Shibuya',
  course: {
    frontend: 'Vue',
    backend: 'Laravel',
  },
};

const { course: { frontend, backend }} = gizumo;
console.log(frontend); // Vue
console.log(backend); // Laravel

// 練習問題
// 問題 1
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

const [strjQuery, strVue, strReact] = arrayFn('react');
console.log(strReact);

// 問題 2
function objectFn(object) {
  console.log(object);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

const { name: companyName } = argObject;

objectFn(companyName);
