import delve from "dlv";
import {Popup} from "@/components/popup";
import React, {useState} from "react";
const url = process.env.API_HOSTNAME;

export default function ComponentSectionReviews({ propsData, reviews, widgetReview }) {
    const [showPopup, setShowPopup] = useState(false);
    const [isSentReview, setIsSentReview] = useState(false);

    function handleShowClick(e) {
        e.preventDefault();
        setShowPopup(true);
    }

    const titleReviews = delve(propsData, "titleReviews");
    const button = delve(propsData, "button");
    return (
        <section className="reviews" id={propsData.link ?? ''}>
            <div className="reviews__wrapper">
                <h2 className="reviews__header header">
                    {titleReviews ?? ''}
                </h2>
                <div className="slider-reviews swiper">
                    <div className="reviews-navigations">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    <SliderContainer sliders={reviews ?? []} />
                </div>
                <div className="reviews__button-wrapper">
                    <button onClick={handleShowClick} className="reviews__button button" type="button" id={button.url ?? ''}>
                        {button.label ?? ''}
                    </button>
                </div>
            </div>
            <Popup
                showPopup={showPopup}
                handleSetShowPopup={setShowPopup}
                widgetData={widgetReview}
                className={'pop-up__review'}
                isSentOrder={isSentReview}
                setIsSentOrder={setIsSentReview}
                actionForm={"/api/send?id=935753898"}
            />
        </section>
    )
}

function SliderContainer({sliders}) {
    const renderedSlide = sliders.map((slide, index) => {
        const review = delve(slide, "attributes");
        return (
            <div className="reviews-slide swiper-slide">
                <div className="reviews-slide-wrapper">
                    <div className="reviews-header">
                        <p className="reviews-name">{review.name_author ?? ''}</p>
                    </div>
                    <div className="reviews-text">
                        <p className="">
                            {review.description_review ?? ''}
                        </p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="reviews-wrapper swiper-wrapper">
            {renderedSlide}
        </div>
    )
}