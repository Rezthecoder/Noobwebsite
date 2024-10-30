document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    // console.log(toggleButton);
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
    toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    })

})