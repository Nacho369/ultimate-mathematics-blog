
const header = document.querySelector('header');
const logo = document.querySelector('.logoFlex img');
const navLinks = document.querySelectorAll('.navLinks a');

window.addEventListener('scroll', () => {
    if(this.scrollY > 100){
        header.classList.add("headerBg");
        navLinks.forEach(navLink => {
            navLink.classList.add("navChg");
        });

        logo.src = './images/umc_logo_full_white.png';
    }
    else{
        header.classList.remove("headerBg");
        navLinks.forEach(navLink => {
            navLink.classList.remove("navChg");
        });

        logo.src = './images/umc_logo_full.png';
    }
})


