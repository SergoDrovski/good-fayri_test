import delve from "dlv";

export default function Footer({ footerProps }) {
    return (
        <footer className="footer block-21" id="link4">
            <div className="footer__top section block-19">

                <div className="footer__contacts layout_41">
                    <div className="section block-18">
                        <div
                            className="phones-38 widget-21 phones-block contacts-block widget-type-contacts_phone section layer-type-widget">
                            <div className="inner">
                                <label className="cell-icon" htmlFor="tg-phones-38">
                                    <div className="icon"></div>
                                </label>
                                <input id="tg-phones-38" className="tgl-but" type="checkbox"/>
                                <div className="block-body-drop">
                                    <div className="cell-text">
                                        <div className="title">
                                            <div className="align-elem">Телефон:</div>
                                        </div>
                                        <div className="text_body">
                                            <div className="align-elem">
                                                <div>
                                                    <a href="tel:+70000000000">{footerProps && delve(footerProps, "contactsFooter.tel")}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="email-39 widget-22 email-block contacts-block widget-type-contacts_email section layer-type-widget">
                            <div className="inner">
                                <label className="cell-icon" htmlFor="tg-email-39">
                                    <div className="icon"></div>
                                </label>
                                <input id="tg-email-39" className="tgl-but" type="checkbox"/>
                                <div className="block-body-drop">
                                    <div className="cell-text">
                                        <div className="title">
                                            <div className="align-elem">Email:</div>
                                        </div>
                                        <div className="text_body">
                                            <div className="align-elem">
                                                <a href="mailto:test@example.com">{footerProps && delve(footerProps, "contactsFooter.email")}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="address-37 widget-20 address-block contacts-block widget-type-contacts_address section layer-type-widget">
                            <div className="inner">
                                <label className="cell-icon" htmlFor="tg37">
                                    <div className="icon"></div>
                                </label>
                                <input id="tg37" className="tgl-but" type="checkbox"/>
                                <div className="block-body-drop">
                                    <div className="cell-text">
                                        <div className="title">
                                            <div className="align-elem">Адрес:</div>
                                        </div>
                                        <div className="text_body">
                                            <div className="align-elem">
                                                {footerProps && delve(footerProps, "contactsFooter.address")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__up-icon-wrapper up-48 widget-27 ">
                <a href="#up" className="footer__up-icon icon"></a>
            </div>
        </footer>
    )
}