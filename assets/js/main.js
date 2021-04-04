document.addEventListener('DOMContentLoaded', Init);

function Init() {
    swiperPartners();
    menuToggle();
}

function swiperPartners() {
    let swiperContainer = '.swiper-container',
        swiperOptions = {
            // Optional parameters
            // loop: true,
            slidesPerView: 'auto',
            spaceBetween: 20
        };
    
    const swiper = new Swiper(swiperContainer, swiperOptions);
}

function menuToggle() {
    let menuBtn = $('.menu-toggle'),
        menu = $('.navbar');

    menuBtn.click(() => {
        menu.slideToggle(300);
    })
}