export const scrollingX = () => {
    
  let scroll = 0; // Инициализация переменной для хранения текущей позиции прокрутки

  try {
    // Получение элементов с использованием querySelector
    const header = document.querySelector('.header');  
    const messengers = document.querySelector('.messengers-btn');
    const support = document.querySelector('.support');
    const btnChat = document.querySelector('.chat-btn');
    const chat = document.querySelector('.chat-window');
    const btnSupport = document.querySelector('.support-btn');

    // Добавление обработчика события для btnChat, если элемент существует
    if (btnChat && chat) {
      btnChat.addEventListener('click', () => {
        const containsClass = chat.classList.contains('chat-active');
        //console.log(containsClass);
      });
    }

    // Добавление обработчика события для btnSupport, если элемент существует
    if (btnSupport && support) {
      btnSupport.addEventListener('click', () => {
        const containsCl = support.classList.contains('support-hidden');
        //console.log(containsCl);
      });
    }

    // Объявление функции onScroll
    function onScroll() {
      let top = window.pageYOffset; // Получение текущей позиции прокрутки
      const chatActive = chat && chat.classList.contains('chat-active');
      const supportActive = support && support.classList.contains('support-visible');
      //console.log(supportActive);

      // Изменение классов элементов в зависимости от направления прокрутки
      if (scroll > top) {
        if (header) header.classList.remove('header--scroll');
        if (messengers) messengers.classList.remove('messengers-btn--scroll');
        if (btnChat) btnChat.classList.remove('chat-btn--scroll');
        if (btnSupport) btnSupport.classList.remove('support-btn--scroll');
      } else if (scroll < top) {
        if (header) header.classList.add('header--scroll');
        if (messengers) messengers.classList.add('messengers-btn--scroll');
        if (!chatActive && btnChat) {
          btnChat.classList.add('chat-btn--scroll');
        }
        if (!supportActive && btnSupport) {
          btnSupport.classList.add('support-btn--scroll');
        }
      }
      scroll = top; // Обновление переменной scroll для следующего вызова onScroll
    }

    window.onscroll = onScroll; // Присвоение обработчика события прокрутки

  } catch (error) {
    console.error('Error initializing scrollingX:', error); // Логирование ошибки, если что-то пошло не так
  }
};

