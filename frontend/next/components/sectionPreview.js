import delve from "dlv";
import React from "react";
export default function ComponentSectionPreview({ propsData, isSentOrder }) {
    return (
        <section className="preview section block-1">
            <div className="preview__wrapper section block-5">
                <div className="preview__contacts contacts section block-4">
                    <div
                        className="contacts__tel phones-8 widget-5 phones-block contacts-block widget-type-contacts_phone section layer-type-widget">
                        <div className="contacts__tel-wrap inner">
                            <div className="contacts__tel-icon cell-icon">
                                <div className="icon"></div>
                            </div>
                            <div className="contacts__tel-num title text_body">
                                <a href="tel:+79183951298">{delve(propsData, "contactsPreview.tel")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="contacts__address address-50 widget-33 address-block contacts-block widget-type-contacts_address section layer-type-widget">
                        <div className="contacts__address-wrap inner">
                            <div className="contacts__address-icon cell-icon">
                                <div className="icon"></div>
                            </div>

                            <div className="contacts__address-text cell-text">
                                <p className="title align-elem">Мы находимся по адресу:</p>

                                <p className="text_body">
                                    {delve(propsData, "contactsPreview.address")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="preview__description editable_block-11 widget-7 section layer-type-widget">
                    <div className="preview__description-wrap body" >
                        <div dangerouslySetInnerHTML={{ __html: delve(propsData, "descriptionPreview") }} />

                        <div className="preview__button  more">
                            <a className={ isSentOrder ? "" : "pulse__full" } href={delve(propsData, "buttonPreview.url")}><span className="align-elem">{delve(propsData, "buttonPreview.label")}</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}