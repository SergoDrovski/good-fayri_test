import delve from "dlv";
import {Form} from "@/components/form";

export function Popup(
    {
        showPopup,
        handleSetShowPopup,
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
            handleSetShowPopup(false);
        }
    }
    if(!showPopup) {
        return null
    }

    return (
        <div className={`pop-up__wrapper ${className}`}>
            <div className="pop-up__background animated_opacity pop-up__close"
                 onClick={handleCloseClick}
            >
                <div className="pop-up">
                <span className="pop-up__close"
                ></span>
                    {isSentOrder &&
                        (<div className={`pop-up__content animated_opacity`}>
                            <h2 className="pop-up__title">{widgetData.form.titleSuccess ?? ''}</h2>
                            <div className="about__form-text form__text">{widgetData.form.descriptionSuccess ?? ''}</div><br/>
                            <div className="types__button-wrap more">
                                <a className="types__button pop-up__close" onClick={handleCloseClick}>Буду ждать :)</a>
                            </div>
                        </div>)}
                    <div className={`pop-up__content ${isSentOrder && 'content__hidden'}`}>
                        <h2 className="pop-up__title">
                            {widgetData.form.titleForm ?? ''} </h2>

                        {widgetData.form.descriptionForm && (
                            <div className="about__form-text form__text">
                                {widgetData.form.descriptionForm}<br/>
                            </div>
                        )}

                        <Form
                            inputs={widgetData.input ?? []}
                            button={widgetData.button ?? {}}
                            handleSent={setIsSentOrder}
                            action={actionForm}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function handleCloseClick(e) {
    e.preventDefault();
    if(e.target.className === 'pop-up__background') {
        setShowPopup(false);
    }

}

