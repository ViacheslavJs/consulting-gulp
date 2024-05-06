export const support = (options) => {
  const moduleSupport = document.getElementById('support');
  const supportBtn = document.getElementsByClassName('support-btn')[0];

  if (moduleSupport !== null && options) {
    if (options.showAuto === true) {
      let tx;
      tx= window.setTimeout(() => {
        moduleSupport.classList.add('support-visible'); 
        supportBtn.style.padding = '15px 8px';
        supportBtn.classList.remove('fas', 'fa-angle-left'); 
        supportBtn.classList.add('fas', 'fa-angle-right');
      }, options.delay);
       
    } else {
      moduleSupport.classList.add('support-hidden'); 
      supportBtn.style.padding = '15px 8px';
      supportBtn.classList.remove('fas', 'fa-angle-right'); 
      supportBtn.classList.add('fas', 'fa-angle-left'); 
    }

    supportBtn.addEventListener('click', () => {
      moduleSupport.classList.toggle('support-visible');
      moduleSupport.classList.toggle('support-hidden');

      if (moduleSupport.classList.contains('support-hidden')) {
        supportBtn.classList.remove('fas', 'fa-angle-right');
        supportBtn.classList.add('fas', 'fa-angle-left');
      } else {
        supportBtn.classList.remove('fas', 'fa-angle-left');
        supportBtn.classList.add('fas', 'fa-angle-right');
      }
    });
  }
};

