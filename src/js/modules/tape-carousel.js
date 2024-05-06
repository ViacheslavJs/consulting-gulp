export const tapeCarousel = () => {

try {
  const moduleTapeCarousel = document.getElementById('t-carousel'); 
  //console.log(moduleTapeCarousel);
  if (moduleTapeCarousel !== null) {
  
/////////////////////////////////////

(function() {

const modalLayer = document.getElementsByClassName('t-modal-img__layer')[0];
const effect = document.getElementsByClassName('for-effects');
const pageScroll = document.getElementsByTagName('body')[0]; 

let onEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.add('filter-blur-grayscale');
      }  
    };
    
let offEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.remove('filter-blur-grayscale');
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
const millSec = setDuration(0.5);

function stopAnimation() {  
  let timer; 
  //console.log(millSec);    
  timer = window.setTimeout( function() {
    modalLayer.classList.remove('layer-off');
    //console.log(modalLayer.classList.contains('layer-off'));  
  }, millSec); 

  //console.log(modalLayer.classList.contains('layer-off'));                    
}
//
   
function showModalImg() {  
  modalLayer.classList.add('layer-on');
  //modalLayer.classList.remove('layer-off');   
  onEffect(); 
  disablePageScrolling();    
  //stopAnimation();
  //console.log(modalLayer);
}


// назначение слушателя на каждый элемент:
/*
// TODO - or variant:
const itemImg = document.querySelectorAll('.t-carousel__preview-img');
//console.log(itemImg);
//console.log(itemImg[2]);
//console.log(itemImg.length);
itemImg.forEach(s => {
  s.addEventListener('click', (event) => {
    let sIndex = Array.prototype.indexOf.call(itemImg, event.target);
    //console.log(sIndex);
    showModalImg();
    counterImg(sIndex + 1);
    clearInterval(timer); 
  });
});
//
*/

// TODO - or variant from es6 '...' operator:
const itemI = document.querySelectorAll('.t-carousel__preview-img');
//console.log(itemImg);
//console.log(itemImg[2]);
//console.log(itemImg.length);
itemI.forEach(s => {
  s.addEventListener('click', (event) => {
    let sIndex = [...document.querySelectorAll('.t-carousel__preview-img')].indexOf(event.target);
    //console.log(sIndex);
    showModalImg();
    counterImg(sIndex + 1);
    //clearInterval(timer); // if auto play
  });
});
//

// проверка наличия элементов превью на странице:
const collection = [itemI];
//console.log(collection, 't-carousel');

/*
//
const image1 = document.querySelector('.t-click-1');
image1.addEventListener('click', () => {
  showModalImg();
  counterImg(1); 
  clearInterval(timer);
});

const image2 = document.querySelector('.t-click-2');
image2.addEventListener('click', () => {
  showModalImg();
  counterImg(2);
  clearInterval(timer); 
});

const image3 = document.querySelector('.t-click-3');
image3.addEventListener('click', () => {
  showModalImg();
  counterImg(3); 
  clearInterval(timer);
});

const image4 = document.querySelector('.t-click-4');
image4.addEventListener('click', () => {
  showModalImg();
  counterImg(4); 
  clearInterval(timer);
});

const image5 = document.querySelector('.t-click-5');
image5.addEventListener('click', () => {
  showModalImg();
  counterImg(5); 
  clearInterval(timer);
});

const image6 = document.querySelector('.t-click-6');
image6.addEventListener('click', () => {
  showModalImg();
  counterImg(6); 
  clearInterval(timer);
});

const image7 = document.querySelector('.t-click-7');
image7.addEventListener('click', () => {
  showModalImg();
  counterImg(7); 
  clearInterval(timer);
});

const image8 = document.querySelector('.t-click-8');
image8.addEventListener('click', () => {
  showModalImg();
  counterImg(8); 
  clearInterval(timer);
});

const image9 = document.querySelector('.t-click-9');
image9.addEventListener('click', () => {
  showModalImg();
  counterImg(9); 
  clearInterval(timer);
});

const image10 = document.querySelector('.t-click-10');
image10.addEventListener('click', () => {
  showModalImg();
  counterImg(10); 
  clearInterval(timer);
});
//
*/

/////// варианты назначения обработчика на иконку закрытия///////
// TODO - syntax variant
//const clickedClass = event.target.className;
document.addEventListener('click', (event) => {
  const clickedClass = event.target.className;
  //console.log(clickedClass);
  if (clickedClass === 'icon-close-img far fa-times-circle') {    
    //modalLayer.style.display = "none";    
    modalLayer.classList.remove('layer-on');
    modalLayer.classList.add('layer-off'); 
    offEffect();
    enablePageScrolling();   
    stopAnimation();
    //console.log(modalLayer); 
  }
});


/*
// TODO - syntax variant
const withСlass = document.querySelectorAll('.icon-close-img');
for (let i = 0; i < withСlass.length; i++) {
  // or
  withСlass[i].addEventListener('click', hiddeModalImg); 
  //console.log([i]);
  
  // or
  //withСlass[i].onclick = hiddeModalImg;   
  //console.log([i]);
  
  // or
  //withСlass[i].onclick = function(){
   //hiddeModalImg(); 
   //console.log([i]);
  //};
  
}

function hiddeModalImg() {	
  modalLayer.style.display = "none";     
  offEffect();
  enablePageScrolling();   
}
//
*/
////////////////////////////////////////////////

modalLayer.addEventListener('click', closeModalLayer);
function closeModalLayer() {
  let clickedСlass = event.target.className;
  let elementEvent = event.target;
  //console.log(clickedСlass);
  //console.log(elementEvent);
  if (clickedСlass === 't-modal-img__layer' || clickedСlass === '' 
      || clickedСlass === 't-modal-img__image' || elementEvent) {
    modalLayer.classList.remove('layer-on');
    modalLayer.classList.add('layer-off'); 
    offEffect();
    enablePageScrolling(); 
    stopAnimation();
    //console.log(modalLayer);
  } 
}


// TODO - modal image
let imgIndex = 1;
showImg(imgIndex);

function counterImg(w) {
  showImg(imgIndex = w);
}

function showImg(w) {
  const img = document.getElementsByClassName('t-modal-img__image-box');
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

// TODO - carousel:
/* label the images, just for convenience, to visually track them */
const carousel = document.getElementById('t-carousel');
const items = carousel.querySelectorAll('li');
let i = 1;
for(let li of items) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* configuration */
/*
let width = 150; // image width
let count = 2; // visible images count
*/

/*
let width = 250; // image width
let count = 1; // visible images count
*/

// Получаем значение переменной
const previewImg = document.querySelector('.t-carousel__preview-img');

// Получаем значение переменной CSS
const previewWidth = getComputedStyle(previewImg).getPropertyValue('--preview-width');

console.log(previewWidth);
const num = parseInt(previewWidth); // 352

console.log(num); 
let width = num; // image width
let count = 1; // visible images count - 1, 0.5, 0.75

/*
// or (без точки! при обращении к селектору тега)
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li'); 
*/

//or (с точкой! при обращении к селектору класса)
let list = carousel.querySelector('.t-carousel__list');
let listElems = carousel.querySelectorAll('.t-carousel__list-item');

let position = 0; // ribbon scroll position

carousel.querySelector('.t-prev').onclick = function() {
  // shift left
  position += width * count;
  // can't move to the left too much, end of images
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px'; 
  //clearInterval(timer); // if auto play
};
            
carousel.querySelector('.t-next').onclick = function() {
  // shift right
  position -= width * count;
  // can only shift the ribbbon for (total ribbon length - visible count) images
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px'; 
  //clearInterval(timer); // if auto play
  //console.log(position);
};
//

/*
// auto play - uncomment "clearInterval(timer)":
let timer;    
timer = window.setInterval( function() {
  position -= width * count;
  // can only shift the ribbbon for (total ribbon length - visible count) images
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
  //console.log(position); // TODO
  //console.log(listElems.length);
  
  // return to start:
  let endPosition = (listElems.length * width) - 300; 
  //console.log(endPosition);
  if (position == -endPosition) {
    setTimeout( function() {
      list.style.marginLeft = 0 + 'px';
    }, 4000);
  }
  //
  
}, 4000); 

let sec = listElems.length * 2000; 
//console.log(sec); // TODO
let stopSlide;
  stopSlide = window.setTimeout( function() {
  clearInterval(timer); 
}, sec);
stopSlide();
//
*/
            
})(); // immediately invoked functions

} // if (moduleTapeCarousel !== null)

} // try

catch(err) {
  //console.log(err.name, err.message);
}


} // export
    
