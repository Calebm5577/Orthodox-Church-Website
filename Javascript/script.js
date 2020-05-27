
//Switch saint name and description onclick

const mainText = document.querySelector("h1.main-textbox-ourfaith-description-text");
const secondaryText = document.querySelector("h1.main-textbox-ourfaith-description-text-long")
const imgContainer = document.querySelector('.main-textbox-ourfaith-saints');

imgContainer.addEventListener('click', (e) => {


  mainText.textContent = e.target.dataset.caption;

});


function Saintdesc(text) {
  var el1 = document.querySelector(".main-textbox-ourfaith-description-text");
  var el2 = document.querySelector(".main-textbox-ourfaith-description-long-text");
  el1.textContent = text;
  el2.textContent = text;
}







