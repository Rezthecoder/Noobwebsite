document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    // console.log(toggleButton);
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
    toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    })

})

//chnage navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scroll')
    }
    else {
        navbar.classList.remove('navbar-scroll')
    }
})