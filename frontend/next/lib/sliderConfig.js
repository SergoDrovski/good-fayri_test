import { Swiper } from "@/lib/swiper-bundle.esm.browser.min.js";

export function createSwiperReviews(){
    return new Swiper(".slider-reviews", {
        direction: "horizontal",
        slidesPerView: 3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
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
}

export function createSwiperQuestions(){
    return new Swiper(".slider-questions", {
        direction: "horizontal",
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
        },
        simulateTouch: true,
    });
}
