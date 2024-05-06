export const chat = (options) => {

const btnName = 'chat-btn'; // клик-родитель
const chatName = 'chat-window'; // вспл. окно

//
const clickElement = `.${btnName}`;
const chatWindow = `.${chatName}`;

(function() {
  
  const parentElems = document.querySelectorAll(clickElement);
  let openChat = null; // Переменная для хранения открытого в данный момент поп-апа

  parentElems.forEach(parentElem => {
    parentElem.addEventListener('click', function(event) {
      const chat = this.querySelector(chatWindow); // Находим соответствующий поп-ап

      if (chat && event.target !== chat) {
        if (openChat && openChat !== chat) {
          openChat.classList.remove('chat-active'); // Закрываем открытый поп-ап, если таковой имеется
        }
        chat.classList.toggle('chat-active'); // Переключаем класс, чтобы отобразить или скрыть поп-ап
        openChat = chat; // Обновляем открытый поп-ап
      }
      
      event.stopPropagation(); // Остановка всплытия события, чтобы клик на родительском элементе не вызывал открытие/закрытие поп-апа
    });
  });

  if (options.closeOutWindow === true) {
    // Закрытие открытого поп-апа при клике вне его и вне родительских элементов
    document.addEventListener('click', function(event) {
      parentElems.forEach(parentElem => {
        const chat = parentElem.querySelector(chatWindow);
        if (chat && openChat && !chat.contains(event.target) && !parentElem.contains(event.target)) {
          openChat.classList.remove('chat-active');
          openChat = null; // Сбрасываем переменную открытого поп-апа
        }
      });
    });
  }

})();


} // export

