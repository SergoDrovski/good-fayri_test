import delve from "dlv";
import Image from 'next/image';
import {imageLoader} from "@/lib/image";
import React from "react";
import { useState } from 'react';
import { Popup } from './popup';

const id_order = process.env.ID_ORDER;

export default function ComponentSectionWork({ propsData, services, widgetOrder, isSentOrder, setIsSentOrder }) {
    const id = "/api/send?id=" + id_order;
    const [showPopup, setShowPopup] = useState(false);

    function handleShowClick(e) {
        e.preventDefault();
        setShowPopup(true);
    }

    const titleStage = delve(propsData, "titleStage");
    const imgUrl = delve(propsData, "imgStage.data.attributes.url");
    const listStage = delve(propsData, "listStage");


    return (
        <section className="service section block-29">
            <div className="service__wrap section block-31">
                <div className="service__stages stages layout column layout_52">
                    <div className="stages__container">
                        {listStage &&
                            (<AccordionListStage listStage={listStage} titleStage={titleStage ?? ''} />)
                        }
                        <Image className="stages__image"
                             loader={imageLoader}
                             src={imgUrl ?? ""}
                             alt={titleStage ?? ''}
                             width={delve(propsData, "imgStage.data.attributes.width")}
                             height={delve(propsData, "imgStage.data.attributes.height")}
                        />
                    </div>
                </div>
                {services &&
                    (<ServicesList listServices={services}
                                   linkSection={propsData.link ?? ''}
                                   handleShowClick={handleShowClick}
                    />)
                }
            </div>
            <Popup showPopup={showPopup}
                   handleSetShowPopup={setShowPopup}
                   widgetData={widgetOrder}
                   className={'pop-up__order'}
                   isSentOrder={isSentOrder}
                   setIsSentOrder={setIsSentOrder}
                   actionForm={"/api/send?id=957527617"}
            />
        </section>
    )
}

function ServicesList({listServices, linkSection, handleShowClick}) {
    const renderedServicesList = listServices.map((item, index) => {
        let img = delve(item, "attributes.img.data.attributes");
        return (
            <li className="types__item item">
                <div className="types__image-wrap image">
                    <Image
                        loader={imageLoader}
                        className="types__image"
                        src={img.url ?? " "}
                        alt={img.name ?? ''}
                        width={img.width ?? 100}
                        height={img.height ?? 100}
                    />
                </div>
                <span className="types__title title">{item.attributes.title ?? ''}</span>
                <span className="types__price">{item.attributes.price ?? ''}</span>
                <div className="types__button-wrap more">
                    <a onClick={handleShowClick} className="types__button " href="">Заказать услугу</a>
                </div>
            </li>
        )
    })
    return (
        <div className="service__types types" id={linkSection}>
            <div
                className="types__wrapper blocklist blocklist-14 widget-8 horizontal_mode widget-type-block_list section layer-type-widget">
                <div className=" types__inner body">
                    <ul className="types__list list">
                        {renderedServicesList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

function AccordionListStage({ listStage,  titleStage}) {

    const renderedAccordionList = listStage.map((item, index) => {
        return (
            <div className="itemAccordion">
                <dt>
                    <a href={`#accordion${index + 1}`} aria-expanded="false" aria-controls={`accordion${index + 1}`}
                       className="accordion-title accordionTitle js-accordionTrigger">{item.titleStage ?? ''}</a>
                </dt>
                <dd className="accordion-content accordionItem is-collapsed" id={`accordion${index + 1}`}
                    aria-hidden="true">
                    <p> {item.descriptionStage ?? ''} </p>
                </dd>
            </div>
        )
    })
    return (
        <ul className="stages__list accordion-55 widget-41 accordion-wr widget-type-accordion section layer-type-widget">
            <li className="stages__item header">
                <div className="headeralign-elem">{titleStage ?? ''}</div>
            </li>
            <div className="accordion">
                <dl>
                    {renderedAccordionList}
                </dl>
            </div>
        </ul>
    )
}