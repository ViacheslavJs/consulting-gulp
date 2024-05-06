export const accordion = () => {

const clickName = 'js-popup'; // клик-родитель
const popUpName = 'popup'; // вспл. окно

//
const clickElement = `.${clickName}`;
const popUp = `.${popUpName}`;

//try {
  //const moduleAccordion = document.querySelectorAll(clickElement); 
  //console.log(moduleAccordion);
  //console.log(moduleAccordion !== null);
  //if (moduleAccordion !== null) {
//

(function() {
  
  const acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

})();

//} // if (moduleAccordion !== null)

//} // try

//catch(err) {
  //console.log(err.name, err.message);
//}


} // export

