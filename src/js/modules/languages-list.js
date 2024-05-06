export const languagesList = () => {
    const s1 = document.querySelector('.languages');
    const s2 = document.querySelector('.languages__submenu');
    const arrowIcon = document.querySelector('.languages__icon');

    let isDropdownVisible = false;

    s1.addEventListener('click', () => {
        isDropdownVisible = !isDropdownVisible;
        //s2.style.display = isDropdownVisible ? 'block' : 'none';

        // Toggle the Font Awesome icon class
        if (isDropdownVisible) {
            s2.style.maxHeight = s2.scrollHeight + 'px';    
            arrowIcon.classList.remove('fa-chevron-down');
            arrowIcon.classList.add('fa-chevron-up');
        } else {
            s2.style.maxHeight = '0'; 
            arrowIcon.classList.remove('fa-chevron-up');
            arrowIcon.classList.add('fa-chevron-down');
        }
    });
};



