import delve from "dlv";
import {Form} from "@/components/form";
import React, {useState} from "react";
import {CustomList} from "@/components/sectionWork";

export function PopupWork(
    {
        statePopup,
        handleSetShowPopup,
        service,
        widgetData,
        className,
        isSentOrder,
        setIsSentOrder,
        actionForm
    }) {

    const titleStage = delve(widgetData, "titleStage");

    function handleCloseClick(e) {
        e.preventDefault();
        if(e.target.classList.contains('pop-up__close')) {
            handleSetShowPopup({show: false, id: 0});
        }
    }

    const [classFacePopup, setFacePopup] = useState('');

    function handleShowCustomList(e) {
        e.preventDefault();
        setFacePopup('ani_rotate_popup');
    }

    function handleShowFacePopup(e) {
        e.preventDefault();
        setFacePopup('ani_rotate_popup_back');
    }

    return (
        <div

            className={`pop-up__wrapper ${className}`}>
            <div className="pop-up__background  pop-up__close animated_opacity_popup"
                 onClick={handleCloseClick}
            >
                <div className={`pop-up animated_wipe_popup  ${classFacePopup}`}>
                    <ClosePopup closePopup={ () => handleSetShowPopup({show: false, id: 0}) }/>
                    {isSentOrder &&
                        (<div className={`pop-up__content animated_opacity_popup `}>
                            <h2 className="pop-up__title">{widgetData.form.titleSuccess ?? ''}</h2>
                            <div className="about__form-text form__text">{widgetData.form.descriptionSuccess ?? ''}</div><br/>
                            <div className="types__button-wrap more">
                                <a className="types__button pop-up__close" onClick={handleCloseClick}>Буду ждать :)</a>
                            </div>
                        </div>)}
                    <div className={`pop-up__content ${isSentOrder ? 'content__hidden' : ''}`}>
                        <h2 className="pop-up__title">
                            {service.attributes.title ?? ''} </h2>

                        <div
                            dangerouslySetInnerHTML={{ __html: service.attributes.description }}
                            className="about__form-text form__text" />

                        { service.attributes.customList.length === 0 ? null :  (
                            <div
                                className="pop-up__button-list"
                                onClick={handleShowCustomList}
                            >
                                <a>Посмотреть список всех работ</a>
                            </div>
                        )}

                        <Form
                            inputs={widgetData.input ?? []}
                            button={widgetData.button ?? {}}
                            handleSent={setIsSentOrder}
                            action={actionForm}
                        />
                    </div>
                    <div className={`pop-up__content--back`}>
                        <div className={`custom__wrapp`}>
                            <CustomList customList={service.attributes.customList ?? []}/>
                        </div>
                        <div
                            className="pop-up__button-list back"
                            onClick={handleShowFacePopup}
                        >
                            <div id="arrow"><i className="fa fa-arrow-left"></i></div>
                            <a>Вернуться назад</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ClosePopup({ closePopup }){
    const [buttonClassAni, setButtonClass] = useState("");
    useState(() => {
        setTimeout(()=>{
            setButtonClass('aniOpen');
        }, 1000)
    }, );
    function closeClick(e) {
        e.preventDefault();
        setButtonClass('aniClose');
        setTimeout(()=>{
            closePopup();
        }, 600)
    }

    return (
        <span
            onClick={closeClick}
            className={`pop-up__btnClose ${buttonClassAni}`}
        ></span>
    )
}

