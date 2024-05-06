export const banner = (options) => {
  const moduleBanner = document.getElementById('banner');
  const bannerBtn = document.getElementsByClassName('banner-btn')[0];

  if (moduleBanner !== null && options) {
    if (options.showAuto === true) {
      let tx;
      tx= window.setTimeout(() => {
        moduleBanner.classList.add('banner-visible'); 
        bannerBtn.style.display = 'block';
        bannerBtn.classList.remove('fas', 'fa-angle-right'); 
        bannerBtn.classList.add('fas', 'fa-angle-left');
      }, options.delay);
       
    } else {
      moduleBanner.classList.add('banner-hidden'); 
      bannerBtn.style.display = 'block';
      bannerBtn.classList.remove('fas', 'fa-angle-left'); 
      bannerBtn.classList.add('fas', 'fa-angle-right'); 
    }

    const ctrlElem = document.getElementsByClassName('banner__text')[0];
    if (options.contentAnimation === true && options.showAuto === true) {
      let interval = options.animationInterval;
      let ty;
      ty= window.setTimeout(() => {
        let timer;
        timer = window.setInterval(() => {
          ctrlElem.classList.toggle('content-control');
        }, interval);

        window.setTimeout(() => {
          clearInterval(timer);
          ctrlElem.classList.remove('content-control');
        }, options.animationDuration);
      }, options.delay);
    } // if

    bannerBtn.addEventListener('click', () => {
      moduleBanner.classList.toggle('banner-visible');
      moduleBanner.classList.toggle('banner-hidden');

      if (moduleBanner.classList.contains('banner-hidden')) {
        bannerBtn.classList.remove('fas', 'fa-angle-left');
        bannerBtn.classList.add('fas', 'fa-angle-right');
      } else {
        bannerBtn.classList.remove('fas', 'fa-angle-right');
        bannerBtn.classList.add('fas', 'fa-angle-left');
      }
    });
  }
};

