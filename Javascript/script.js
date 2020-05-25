
//Switch saint name and description onclick

const mainText = document.querySelector("h1.main-textbox-about-description-text");
const secondaryText = document.querySelector("h1.main-textbox-about-description-text-long")
const imgContainer = document.querySelector('.main-textbox-about-saints');

imgContainer.addEventListener('click', (e) => {


  mainText.textContent = e.target.dataset.caption;

});


function Saintdesc(text) {
  var el1 = document.querySelector(".main-textbox-about-description-text");
  var el2 = document.querySelector(".main-textbox-about-description-long-text");
  el1.textContent = text;
  el2.textContent = text;
}







