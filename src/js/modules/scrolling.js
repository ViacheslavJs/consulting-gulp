export const scrolling = () => {
    
  let scroll = 0;      
  window.onscroll = onScroll;   

  const header = document.querySelector('.header');  
  const messengers = document.querySelector('.messengers-btn');
  const support = document.querySelector('.support');

  const btnChat = document.querySelector('.chat-btn');
  const chat = document.querySelector('.chat-window');
  //console.log(btnChat);
  btnChat.addEventListener('click', ()=> {
    const containsClass = chat.classList.contains('chat-active');
    //console.log(containsClass);
  });

  const btnSupport = document.querySelector('.support-btn');
  //const support = document.querySelector('.support');
  //console.log(btnSupport);
  btnSupport.addEventListener('click', ()=> {
    const containsCl = support.classList.contains('support-hidden');
    //console.log(containsCl);
  });


  function onScroll() {
    let top = window.pageYOffset;  
    const chatActive = chat.classList.contains('chat-active');
    const supportActive = support.classList.contains('support-visible'); 
    //console.log(supportActive);
    
      if (scroll > top) {
        header.classList.remove('header--scroll');
        messengers.classList.remove('messengers-btn--scroll'); 
        btnChat.classList.remove('chat-btn--scroll');  
        btnSupport.classList.remove('support-btn--scroll');      
    
      } else if (scroll < top) {
        header.classList.add('header--scroll');
        messengers.classList.add('messengers-btn--scroll'); 
        //
        if (!chatActive) {  
          btnChat.classList.add('chat-btn--scroll');    
        }        
        //
        if (!supportActive) {  
          btnSupport.classList.add('support-btn--scroll');    
        } 
        
      }
      scroll = top;  
    
  }
}

