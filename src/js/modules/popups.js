export const popUp = (options) => {
  const clickName = 'js-popup'; // класс кнопок
  const popUpName = 'popup'; // класс всплывающих окон
  const popIcons = 'pop-icons'; // иконока-кнопка
  const popIconsSpan = 'pop-span';
  const mainFontAwesome = options.mainFontAwesome; // основной класс fontawesome
  const iconClosed = options.iconClosed;
  const iconOpen = options.iconOpen;

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
          popup.classList.remove('left');
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
    
  if (options.switchIcons) {
    const icons = document.querySelectorAll(`.${popIcons}`);
    //console.log(icons);
    icons.forEach(icon => {
      //console.log(icon);
      icon.classList.add(mainFontAwesome, iconClosed);
    });
  }
  
  // Event listener for click on parent elements
  parentElems.forEach(parentElem => {
    parentElem.addEventListener('click', function(event) {
      const btn = this.querySelector(clickElement); 
      const popup = this.querySelector(popUpSelector);

      function setEvent() {
        let isTargetBtn;      
        if (options.clickOnlyIcon) {
          isTargetBtn = event.target.matches(`.${popIcons}`); // or
          //isTargetBtn = event.target.classList.contains(popIcons); // or
        }
        if (options.clickOnlySpan) {
          isTargetBtn = event.target.matches(`.${popIconsSpan}`); // or
          //isTargetBtn = event.target.classList.contains(popIconsSpan); // or
        }
        /*
        if ((!options.clickOnlyIcon && !options.clickOnlySpan || 
            options.clickOnlyIcon && options.clickOnlySpan) &&
            !popup.contains(event.target)) {
          isTargetBtn = event.currentTarget.classList.contains(clickName); // click to parent and child
        }
        */
        if (!options.clickOnlyIcon && !options.clickOnlySpan || 
            options.clickOnlyIcon && options.clickOnlySpan) {
          isTargetBtn = event.target.matches(`.${clickName}, .${popIcons}, .${popIconsSpan}`);
        }
        return isTargetBtn;
      }

      let isTargetBtn = setEvent();
      console.log(isTargetBtn); 
     
      if (isTargetBtn) {
        // Toggle visibility of the clicked popup
        popup.classList.toggle("show");

        // Close the previously open popup if different button is clicked
        if (openPopup && openPopup !== popup) {
          const icon = openPopup.parentElement.querySelector(`.${popIcons}`);
          if (options.switchIcons) {
            icon.classList.remove(iconOpen);
            icon.classList.add(iconClosed);
          }
          openPopup.classList.remove("show");
        }

        // Update the openPopup variable to the current popup state
        openPopup = popup.classList.contains("show") ? popup : null;

        // Find the corresponding icon inside the clicked parent element
        const icon = this.querySelector(`.${popIcons}`);

        // Change the color of the icon based on popup visibility
        if (options.switchIcons) {
          if (popup.classList.contains("show")) {
            icon.classList.remove(iconClosed);
            icon.classList.add(iconOpen);
          } else {
            icon.classList.remove(iconOpen);
            icon.classList.add(iconClosed);
          }
        }

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
    if (options.closeClickOutside && !clickedOnButton && openPopup) {
      const icon = openPopup.parentElement.querySelector(`.${popIcons}`);
      if (options.switchIcons) {
        icon.classList.remove(iconOpen);
        icon.classList.add(iconClosed);
      }
      openPopup.classList.remove("show");
      openPopup = null;
    }
  });


};

