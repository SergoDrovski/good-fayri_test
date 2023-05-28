import delve from "dlv";
import {Form} from "@/components/form";

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

    return (
        <div className={`pop-up__wrapper ${className}`}>
            <div className="pop-up__background  pop-up__close animated_opacity_popup"
                 onClick={handleCloseClick}
            >
                <div className="pop-up animated_wipe_popup">
                <span className="pop-up__close"
                ></span>
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
                            {service.attributes.title ?? ''} </h2>

                        <div
                            dangerouslySetInnerHTML={{ __html: service.attributes.description }}
                            className="about__form-text form__text" />
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

