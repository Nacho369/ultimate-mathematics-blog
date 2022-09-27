
const header = document.querySelector('header');
const logo = document.querySelector('.logoFlex img');
const line = document.querySelector('.line');
const navLinks = document.querySelectorAll('.navLinks a');

window.addEventListener('scroll', () => {
    if(this.scrollY > 100){
        header.classList.add("headerBg");
        navLinks.forEach(navLink => {
            navLink.classList.add("navChg");
        });

        logo.src = './images/umc_logo_full_white.png';
        line.classList.add("colorChg");
    }
    else{
        header.classList.remove("headerBg");
        navLinks.forEach(navLink => {
            navLink.classList.remove("navChg");
        });

        logo.src = './images/umc_logo_full.png';
        line.classList.remove("colorChg");
    }
})


