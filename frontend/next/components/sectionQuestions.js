import delve from "dlv";
import React, {useEffect} from "react";
import {createSwiperQuestions} from '@/lib/sliderConfig';
const url = process.env.API_HOSTNAME;

export default function ComponentSectionQuestions({ propsData }) {
    // загрузка настроек слайдера
    useEffect(() => {
        createSwiperQuestions();
    }, [""]);

    const titleQuestions = delve(propsData, "titleQuestions");
    const question = delve(propsData, "question");
    return (
        <section
            className="questions"
        >
            <div className="questions__wrapper">
                <h2 className="questions__header header">
                    {titleQuestions ?? ''}
                </h2>
                <div className="slider-questions swiper">
                    <div className="questions-navigations">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    <QuestionsListSlider questions={question ?? []}/>
                </div>
                <div className="questions-desktop__box">
                    <QuestionsList questions={question ?? []}/>
                </div>

            </div>
        </section>
    )
}

function QuestionsListSlider({questions}) {
    const renderedQuestion = questions.map((item, index) => {
        return (
            <div className="questions-slide swiper-slide">
                <div className="questions-slide-wrapper">
                    <div className="questions-header">
                        <p className="questions-name">{item.questionTitle ?? ''}</p>
                    </div>
                    <div className="questions-text-wrapper">
                        <p className="questions-text">
                            {item.answer ?? ''}
                        </p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="questions-wrapper swiper-wrapper">
            {renderedQuestion}
        </div>
    )
}

function QuestionsList({questions}) {
    const renderedQuestion = questions.map((item, index) => {
        return (
            <div className="questions-desktop__card">
                <p className="questions-desktop__title">{item.questionTitle ?? ''}</p>
                <p className="questions-desktop__text">
                    {item.answer ?? ''}
                </p>
            </div>
        )
    })
    return (
        <div className="questions-desktop__wrapper">
            {renderedQuestion}
        </div>
    )
}