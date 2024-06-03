
export const messengers = () => {

  const messengersBtn = document.getElementById('messengersBtn');
  if (messengersBtn !== null) {

    // TODO - (messenger icons show/animation)
    const messengersIcon = document.querySelector('.messengers-btn__base-icon');

    const link = document.querySelectorAll('.messengers-btn__link');

    messengersIcon.addEventListener('click', (event) => {
      messengersIcon.classList.toggle('base-icon-hidden');
    });
 
    link.forEach(w => {
      messengersIcon.addEventListener('click', showIcons);
    
      function showIcons() {
        w.classList.toggle('icons-show');
      
        // TODO - optional - hide icons when clicked anywhere
        document.addEventListener('click', (event) => {
          let messengersBox = document.querySelector(".messengers-btn");
          //console.log(!messengersBox.contains(event.target));
          if (!messengersBox.contains(event.target)) {
            w.classList.remove('icons-show');
            messengersIcon.classList.remove('base-icon-hidden');      
          }
        });    
      } 
     
    });
    //
  
  // TODO - animation direction (using 'window.matchMedia' method )
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries - description here
  const mediaQueryList = window.matchMedia('(orientation: portrait)');
  //console.log(mediaQueryList.matches);
  const messengerLink = document.querySelectorAll('.messengers-btn__link'); 
  messengerLink.forEach(element => {
  
    if (mediaQueryList.matches) {
      element.classList.toggle('direction-x');
      //console.log('portrait');
    } else {
      element.classList.toggle('direction-y');
      //console.log('landscape');
    }
  
    function handleOrientationChange(evt) {
      if (evt.matches) {
        element.classList.remove('direction-x'); 
        element.classList.add('direction-y');
      } else {
        element.classList.remove('direction-y'); 
        element.classList.add('direction-x');
      }
    }
    handleOrientationChange(mediaQueryList); 
    mediaQueryList.addEventListener('change', handleOrientationChange);
    
  });
  //
  

  /*
  // TODO - or animation direction - somersault over the head)) - works 100%:
  const messengerLink = document.querySelectorAll('.messengers-btn__link'); 
  messengerLink.forEach(element => {
    //console.log(element);
  
    const width = window.outerWidth; 
    const height = window.outerHeight; 
    //console.log(width);
    //console.log(height);  
   
    if ( width > height ) {
      element.classList.toggle('direction-x');
    } else if ( height > width ) {
      element.classList.toggle('direction-y'); 
    }
   
    function redirection() {           
      const widthResize = window.outerWidth; 
      const heightResize = window.outerHeight; 
      //console.log(widthResize);
      //console.log(heightResize);      
    
      if ( widthResize > heightResize ) {
        element.classList.remove('direction-y'); 
        element.classList.add('direction-x');        
        //console.log('if');
      
      } else if ( heightResize > widthResize ) {
        element.classList.remove('direction-x'); 
        element.classList.add('direction-y');       
        //console.log('else if');  
      }
             
    }  
    window.addEventListener('resize', redirection); 
 
  });
  //
  */
  
  /*
  // TODO - self-disappearance messenger icons:
  // connect 'cursor: default' property if using this js block:  
  link.forEach(w => {
    messengersIcon.addEventListener('click', showIcons);
    
    function showIcons() {
      w.classList.add('icons-show');
      messengersIcon.classList.add('cursor-inactive');
      messengersIcon.removeEventListener('click', showIcons);
      setTimeout( function() {
        w.classList.remove('icons-show');
        messengersIcon.classList.remove('cursor-inactive');
        messengersIcon.addEventListener('click', showIcons);
      }, 5500); 
    }
        
  });
  //
  */

  } // if

}; // iconsControl



