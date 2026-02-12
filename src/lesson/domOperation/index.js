import 'animate.css';

// ここにコードを書きながら確認しましょう！

const title = document.getElementById('title');
const button = document.getElementById('button');
const nodeTypeCard = document.querySelector('.card-type--mocha');
const eventTypeCard = document.querySelector('.card-type--yellow');

button.addEventListener('click', () => {
  title.classList.add('animate__hinge');

  // 初期化
  nodeTypeCard.classList.remove('card-animation');
  eventTypeCard.style.display = 'none';
  eventTypeCard.classList.remove('animate__fadeInUp');

  setTimeout(() => {
    title.classList.remove('animate__hinge');
    
    eventTypeCard.style.display = 'block';
    nodeTypeCard.classList.add('card-animation');
    eventTypeCard.classList.add('animate__fadeInUp');
  }, 2000);
});




// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
