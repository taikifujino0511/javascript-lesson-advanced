// 必要な関数をモジュールからインポートする
import { $axios } from "./axiosHelper";
import { createErrorElement, createElements } from "./createElement";

window.addEventListener('DOMContentLoaded', () => {
  // ここに処理を書いていく
  const listElement = document.getElementById('list');
  const pokeListURL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
  const pokeElements = document.createDocumentFragment() // 空のフラグメントを作成
  $axios(pokeListURL).then(async (resList) => {
    const pokeList = resList.data.results;
    for (const poke of pokeList) { // 順番を担保するためのfor
      await $axios(poke.url).then((resDetail) => {
        const pokeDetail = resDetail.data;
        $axios(pokeDetail.species.url).then((resTransratedName) => {
          const TransratedPokeName = resTransratedName.data.names[0].name;
          const pokeElement = createElements(
            `
            <li class="list-item">
              <div class="character">
                <img src="${pokeDetail.sprites.other['official-artwork'].front_default}" width="475" height="475" alt="" class="character__img">
              </div>
              <p class="character__name">${TransratedPokeName}</p>
            </li>
            `
          );
          pokeElements.appendChild(pokeElement); // 親フラグメントにフラグメントを追加
        }).catch(e => {
          console.log(e);
          listElement.appendChild(createErrorElement(e));
        });
      }).catch(e => {
        console.log(e);
        listElement.appendChild(createErrorElement(e));
      });
    };
    listElement.appendChild(pokeElements); // forの後でListに追加
  }).catch(e => {
    console.log(e);
    listElement.appendChild(createErrorElement(e));
  });
});
