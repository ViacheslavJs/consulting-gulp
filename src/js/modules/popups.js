export const popUp = () => {

const clickName = 'js-popup'; // клик-родитель
const popUpName = 'popup'; // вспл. окно

//
const clickElement = `.${clickName}`;
const popUp = `.${popUpName}`;

//try {
  //const modulePopUp = document.querySelectorAll(clickElement); 
  //console.log(modulePopUp);
  //console.log(modulePopUp !== null);
  //if (modulePopUp !== null) {
//

(function() {
  
  const parentElems = document.querySelectorAll(clickElement);
  let openPopup = null; // Переменная для хранения открытого в данный момент поп-апа

  parentElems.forEach(parentElem => {
    parentElem.addEventListener('click', function(event) {
      const popup = this.querySelector(popUp); // Находим соответствующий поп-ап

      if (popup && event.target !== popup) {
        if (openPopup && openPopup !== popup) {
          openPopup.classList.remove("show"); // Закрываем открытый поп-ап, если таковой имеется
        }
        popup.classList.toggle("show"); // Переключаем класс, чтобы отобразить или скрыть поп-ап
        openPopup = popup; // Обновляем открытый поп-ап
      }
      
      event.stopPropagation(); // Остановка всплытия события, чтобы клик на родительском элементе не вызывал открытие/закрытие поп-апа
    });
  });

  // Закрытие открытого поп-апа при клике вне его и вне родительских элементов
  document.addEventListener('click', function(event) {
    parentElems.forEach(parentElem => {
      const popup = parentElem.querySelector(popUp);
      if (popup && openPopup && !popup.contains(event.target) && !parentElem.contains(event.target)) {
        openPopup.classList.remove("show");
        openPopup = null; // Сбрасываем переменную открытого поп-апа
      }
    });
  });


})();

//} // if (modulePopUp !== null)

//} // try

//catch(err) {
  //console.log(err.name, err.message);
//}


} // export

