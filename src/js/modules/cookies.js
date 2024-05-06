export const cookies = (options) => {
  const moduleCookies = document.getElementById('cookies');
  const agreeBtn = document.getElementsByClassName('cookies-agree')[0];
  const rejectBtn = document.getElementsByClassName('cookies-reject')[0];

  if (moduleCookies !== null && options) {
    let delay;
    if (options.showAuto === true) {
      delay = options.delay;
    } else {
      delay = 0;
    }

    // сохранение согласия пользователя в localStorage
    const saveConsent = (consent) => {
      localStorage.setItem('cookiesConsent', consent);
    };

    let timeout;
    timeout = window.setTimeout(() => {
      moduleCookies.classList.add('cookies-visible'); 
      //cookiesBtn.classList.remove('fas', 'fa-angle-right'); 
      //cookiesBtn.classList.add('fas', 'fa-angle-left');    
    
      // Обработчик клика "Согласен"
      agreeBtn.addEventListener('click', () => {
        moduleCookies.classList.toggle('cookies-visible');
        moduleCookies.classList.toggle('cookies-hidden');
        // Сохраняем согласие пользователя
        saveConsent('accepted'); 

        // Дальнейшие действия после согласия пользователя
        handleUserActions('accepted');
        
      });

      // Обработчик клика "Отказать"
      rejectBtn.addEventListener('click', () => {
        moduleCookies.classList.remove('cookies-visible');
        moduleCookies.classList.add('cookies-hidden');
        // Сохраняем отказ пользователя
        saveConsent('rejected');

        // Дальнейшие действия после отказа пользователя
        handleUserActions('rejected');

      });

      //
    }, delay);

    // Выполнение дальнейших действий после согласия или отказа пользователя
    const handleUserActions = (consentStatus) => {
      // Здесь можно добавить код для выполнения дополнительных действий
      if (consentStatus === 'accepted') {
        // Действия после согласия пользователя
        console.log('согласие');
        // Например, загрузка дополнительных данных или отправка запроса на сервер
      } else if (consentStatus === 'rejected') {
        // Действия после отказа пользователя
        console.log('отказ');
        // Например, скрытие функциональности, связанной с использованием cookies
      }
    };
    //

  }
};

