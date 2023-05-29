import delve from "dlv";
import {Form} from "@/components/form";
import {ClosePopup} from "@/components/popupWork";

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
            <div className="pop-up__background  pop-up__close"
                 onClick={handleCloseClick}
            >
                <div className="pop-up animated_wipe_popup">
                    <ClosePopup closePopup={ () => handleSetShowPopup(false)} />
                    {isSentOrder &&
                        (<div className={`pop-up__content animated_opacity_popup`}>
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


