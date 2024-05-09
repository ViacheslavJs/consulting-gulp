export const popUp = (options) => {
  const clickName = 'js-popup'; // класс кнопок
  const popUpName = 'popup'; // класс всплывающих окон
  const popIcons = 'pop-icons'; // класс иконок

  const clickElement = `.${clickName}`;
  const popUpSelector = `.${popUpName}`;

  const parentElems = document.querySelectorAll(clickElement);
  let openPopup = null; // переменная для отслеживания открытого попапа

  // Function to update popup position classes based on button position
  const updatePopupPositionClass = () => {
    parentElems.forEach(parentElem => {
      const popup = parentElem.querySelector(popUpSelector);
      if (popup) {
        const parentRect = parentElem.getBoundingClientRect();
        const popupRect = popup.getBoundingClientRect();

        const buttonCenter = parentRect.left + parentRect.width / 2;
        const screenWidth = window.innerWidth;
        const screenCenter = screenWidth / 2;

        // Determine the relative position of the button
        if (buttonCenter > screenCenter) {
          // Button closer to the right edge
          popup.classList.remove('left', 'c');
          popup.classList.add('right');
        } else {
          // Button closer to the left or centered
          popup.classList.remove('right');
          popup.classList.add('left');
        }
      }
    });
  };

  // Event listeners for load and resize events
  window.addEventListener('load', updatePopupPositionClass);
  window.addEventListener('resize', updatePopupPositionClass);

  if (options.keepOpenAll) {

    // Event listener for click on parent elements
    parentElems.forEach(parentElem => {
      parentElem.addEventListener('click', function(event) {
        const btn = this.querySelector(clickElement); 
        /*const isTargetBtn = event.target.classList.contains(clickName) || 
              event.target.classList.contains(popIcons); // or */
        const isTargetBtn = event.target.matches(`.${clickName}, .${popIcons}`); // or
        console.log(isTargetBtn); 
        const popup = this.querySelector(popUpSelector);
        if (isTargetBtn) {
          popup.classList.toggle("show");
        }
        event.stopPropagation();
      });
    });

    // Event listener to close popups when clicking outside
    document.addEventListener('click', function(event) {
      parentElems.forEach(parentElem => {
        const popup = parentElem.querySelector(popUpSelector);
        if (popup && !popup.contains(event.target) && !parentElem.contains(event.target)) {
          popup.classList.remove("show");
        }
      });
    });

  } else {
  
    // Event listener for click on parent elements
    parentElems.forEach(parentElem => {
      parentElem.addEventListener('click', function(event) {
        const btn = this.querySelector(clickElement); 
        /*const isTargetBtn = event.target.classList.contains(clickName) || 
              event.target.classList.contains(popIcons); // or */
        const isTargetBtn = event.target.matches(`.${clickName}, .${popIcons}`); // or
        console.log(isTargetBtn); 
        const popup = this.querySelector(popUpSelector);
        if (isTargetBtn) {
          // Toggle visibility of the clicked popup
          popup.classList.toggle("show");

          // Close the previously open popup if different button is clicked
          if (openPopup && openPopup !== popup) {
            openPopup.classList.remove("show");
          }

          // Update the openPopup variable to the current popup state
          openPopup = popup.classList.contains("show") ? popup : null;
        }
        event.stopPropagation();
      });
    });

    // Event listener to close popups when clicking outside or on another button
    document.addEventListener('click', function(event) {
      let clickedOnButton = false;

      // Check if the click was on any of the buttons
      parentElems.forEach(parentElem => {
        if (parentElem.contains(event.target)) {
          clickedOnButton = true;
        }
      });

      // Close the open popup if click was outside or on another button
      if (!clickedOnButton && openPopup) {
        openPopup.classList.remove("show");
        openPopup = null;
      }
    });

  } // options.keepOpenAll

};

