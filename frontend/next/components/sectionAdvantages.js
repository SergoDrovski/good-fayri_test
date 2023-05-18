import delve from "dlv";
const url = process.env.API_HOSTNAME;

export default function ComponentSectionAdvantages({ propsData }) {
    const titleAdvantages = delve(propsData, "titleAdvantages");
    const advantages = delve(propsData, "advantage");

    return (
        <section className="advantages section block-10">
            <div className="advantages__wrap section ">
                <div className="advantages__inner blocklist blocklist-17 widget-9">
                    <div className="advantages__header header">
                        <h2 className="header_text">
                            {titleAdvantages}
                        </h2>
                    </div>
                    <div className="advantages__content ">
                        {advantages &&
                            (<AdvantagesList listAdvantages={advantages} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

function AdvantagesList({listAdvantages}) {
    const renderedAdvantagesList = listAdvantages.map((item, index) => {
        let img = delve(item, "imgAdv.data.attributes");
        return (
            <li className="advantages__item ">
                <div className="advantages__item-inner item">
                    <div className="advantages__image-wrapper image">
                  <span className="advantages__image-span img-convert img-cover">
                      <img className="advantages__image"
                           src={ url + img.url ?? " "}
                           alt={img.name ?? ''}
                      />
                  </span>
                        <div className="image-inner"></div>
                    </div>
                    <p className="advantages__title title">{item.titleAdv}</p>
                    <div className="advantages__text-wrapper text">
                        <p className="advantages__text">
                            {item.descriptionAdv}<br/>
                        </p>
                    </div>
                </div>
            </li>
        )
    })
    return (
        <ul className="advantages__list list">
            {renderedAdvantagesList}
        </ul>
    )
}
