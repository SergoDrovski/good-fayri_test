import {Form} from "@/components/form";
import delve from "dlv";
import React from "react";
const url = process.env.API_HOSTNAME;

export default function ComponentSectionAbout({ propsData, isSentOrder, setIsSentOrder }) {
    const titleAbout = delve(propsData, "titleAbout");
    const secondTitle = delve(propsData, "secondTitle");
    const textAbout = delve(propsData, "textAbout");
    const titleForm = delve(propsData, "form.titleForm");
    const titleSuccess = delve(propsData, "form.titleSuccess");
    const descriptionSuccess = delve(propsData, "form.descriptionSuccess");
    const descriptionForm = delve(propsData, "form.descriptionForm");

    return (
        <section className="about" id={propsData.link ?? ''}>
            <div className="about__wrapper section">
                <div className="about__description  editable_block-29 widget-14  ">
                    <h2 className="about__header header">
                        {titleAbout ?? ''}
                    </h2>
                    <div className="about__body body">
                        <div className="about__title title">
                            {secondTitle ?? ''}
                        </div>
                        <div className="about__text text">
                            <p>
                                {textAbout ?? ''}
                            </p>
                        </div>

                    </div>
                </div>

                <div className="about__form form-32 widget-16 pop-up__order" id="order">
                    {isSentOrder &&
                        (<>
                            <h2 className="pop-up__title">{titleSuccess ?? ''}</h2>
                            <div className="about__form-text form__text">{descriptionSuccess ?? ''}</div><br/>
                        </>)}
                    <div className={`about__form__content ${isSentOrder && 'content__hidden'}`}>
                        <div className="about__form-header form__header">
                            {titleForm ?? ''}
                        </div>
                        <div className="about__form-text form__text">
                            {descriptionForm ?? ''}<br/>
                        </div>
                        <Form
                            inputs={propsData.input}
                            button={propsData.button}
                            handleSent={setIsSentOrder}
                            action={`/api/send?id=${process.env.ID_ORDER}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}


