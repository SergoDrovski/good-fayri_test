import React from "react";
import ComponentSectionPreview from './sectionPreview';
import ComponentSectionWork from './sectionWork';
import ComponentSectionAdvantages from './sectionAdvantages';
import ComponentSectionAbout from './sectionAbout';
import ComponentSectionReviews from './sectionReviews';
import ComponentSectionQuestions from './sectionQuestions';

const Sections = {
    ComponentSectionPreview,
    ComponentSectionWork,
    ComponentSectionAdvantages,
    ComponentSectionAbout,
    ComponentSectionReviews,
    ComponentSectionQuestions
}

export default function Content(
    {
        sectionsData,
        services,
        reviews,
        widgetOrder,
        widgetReview,
        isSentOrder,
        setIsSentOrder
    } ) {
    const renderedSection = sectionsData.map(item => {
        let nameComponent = item?.__typename;
        if(Sections[nameComponent]){
            let Component = Sections[nameComponent];
            return <Component
                propsData={item}
                services={services.data}
                reviews={reviews.data}
                widgetOrder={widgetOrder}
                widgetReview={widgetReview}
                isSentOrder={isSentOrder}
                setIsSentOrder={setIsSentOrder}
            />
        }
        return null
    })
    return <div>{renderedSection}</div>
}