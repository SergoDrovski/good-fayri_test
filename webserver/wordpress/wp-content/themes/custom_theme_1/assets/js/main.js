const swiperAdvantages = new Swiper(".slider-reviews", {
    direction: "horizontal",
    slidesPerView: 3,

    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true,
    // },
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    },
    simulateTouch: true,

});
const swiperQuestions = new Swiper(".slider-questions", {
    direction: "horizontal",
    slidesPerView: 1,

    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true,
    // },
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        // 768: {
        //     slidesPerView: 2,
        // },
        // 900: {
        //     slidesPerView: 3,
        // },
    },
    simulateTouch: true,

});


//  планый скролл
// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const blockID = anchor.getAttribute('href');
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }

