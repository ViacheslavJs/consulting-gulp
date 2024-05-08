export const tileLightbox = () => {

// set parameters:
const prefixName = 'tile'; // имя блока html
const closeIcon = 'far fa-times-circle'; // иконка Font awesome
const animationSec = 0.4; // время появления/растворения

//
const imagePreview = `.${prefixName}-preview__img`;
const layer = `${prefixName}-modal__layer`;
const modalImageBox = `${prefixName}-modal__image-box`;
const close = `${prefixName}-modal__close`;
const layerView = `${prefixName}-view`;
const layerHidden = `${prefixName}-hidden`;
const imageFilters = `${prefixName}-filters`;
//

try {
  const moduleTileLightbox = document.querySelectorAll(imagePreview); 
  //console.log(moduleTileLightbox);
  //console.log(moduleTileLightbox !== null);
  if (moduleTileLightbox !== null) {
//

(function() {

const modalLayer = document.getElementsByClassName(layer)[0];
const effect = document.getElementsByClassName('for-effects');
const pageScroll = document.getElementsByTagName('body')[0]; 

let onEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.add(imageFilters);
      }  
    };
    
let offEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.remove(imageFilters);
      }  
    };

// page scroll disable function (body):
function disablePageScrolling () {
	 pageScroll.style.overflowY = "hidden";
}

// page scroll enable function (body):
function enablePageScrolling () {
	 pageScroll.style.overflowY = "visible"; // instead of visible - auto or ""
}

// установка интервала в анимацию
function setDuration(sec) {
  //const s = 0.5;
  const millSec = sec * 1000;
  const valueAnim = `${sec}s`; 
  modalLayer.style.animationDuration = valueAnim;
  //console.log(valueAnim);
  // info
  let style = window.getComputedStyle(modalLayer); 
  let styleValueAnim = style.getPropertyValue('animation-duration'); 
  //console.log(styleValueAnim);
  //console.log(modalLayer);
  //console.log(millSec);
  return millSec;
}
const millSec = setDuration(animationSec);

function stopAnimation() {  
  let timer; 
  //console.log(millSec);    
  timer = window.setTimeout( function() {
    modalLayer.classList.remove(layerHidden);
    //console.log(modalLayer.classList.contains(layerHidden));  
  }, millSec); 

  //console.log(modalLayer.classList.contains(layerHidden));                    
}
//
   
function showModalImg() {  
  modalLayer.classList.add(layerView);
  //modalLayer.classList.remove(layerView);   
  onEffect(); 
  disablePageScrolling();    
  //stopAnimation();
  //console.log(modalLayer);
}

// назначение слушателя на каждый элемент:
/*
// TODO - or variant:
const itemImg = document.querySelectorAll(imagePreview);
//console.log(itemImg);
//console.log(itemImg[2]);
//console.log(itemImg.length);
itemImg.forEach(s => {
  s.addEventListener('click', (event) => {
    let sIndex = Array.prototype.indexOf.call(itemImg, event.target);
    //console.log(sIndex);
    showModalImg();
    counterImg(sIndex + 1);
  });
});
//
*/

// TODO - or variant from es6 '...' operator:
const itemImg = document.querySelectorAll(imagePreview);
//console.log(itemImg);
//console.log(itemImg[2]);
//console.log(itemImg.length);
itemImg.forEach(s => {
  s.addEventListener('click', (event) => {
    let sIndex = [...document.querySelectorAll(imagePreview)].indexOf(event.target);
    //console.log(sIndex);
    showModalImg();
    counterImg(sIndex + 1);
  });
});
//

// проверка наличия элементов превью на странице:
const collection = [itemImg];
//console.log(collection);

// обработчик иконки close:
//const clickedClass = event.target.className;
document.addEventListener('click', (event) => {
  const clickedClass = event.target.className;
  //console.log(clickedClass);
  if (clickedClass === `${close} ${closeIcon}`) {    
    //modalLayer.style.display = "none";    
    modalLayer.classList.remove(layerView);
    modalLayer.classList.add(layerHidden); 
    offEffect();
    enablePageScrolling();   
    stopAnimation();
    //console.log(modalLayer); 
  }
});

//
modalLayer.addEventListener('click', closeModalLayer);
function closeModalLayer() {
  let clickedСlass = event.target.className;
  let elementEvent = event.target;
  //console.log(clickedСlass);
  //console.log(elementEvent);
  if (clickedСlass === `${layer} ${layerView}` || clickedСlass === '') {
    modalLayer.classList.remove(layerView);
    modalLayer.classList.add(layerHidden); 
    offEffect();
    enablePageScrolling(); 
    stopAnimation();
    //console.log(modalLayer);
  } 
}


// TODO - single image
let imgIndex = 1;
showImg(imgIndex);

function counterImg(w) {
  showImg(imgIndex = w);
}

function showImg(w) {
  const img = document.getElementsByClassName(modalImageBox);
  let i;
   
  if (w > img.length) {
      imgIndex = 1
  }
    
  if (w < 1) {
      imgIndex = img.length
  }
      
  for (i = 0; i < img.length; i++) {
      img[i].style.display = "none";
  }
     
  img[imgIndex-1].style.display = "block";      
  
}
//

})(); // immediately invoked functions

} // if (moduleMyLightbox !== null)

} // try

catch(err) {
  //console.log(err.name, err.message);
}


} // export

