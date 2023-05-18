import delve from "dlv";

const url = process.env.API_HOSTNAME;

export default function Header({ headerProps }) {
    return (
        <header className="page-header" id="up">
            <div className="container">
                <div className="page-header__wrapper">
                    <div className="page-header__logo">
                        <a className="logo__link" href="">
                            { headerProps &&
                                (<img className="logo__img"
                                     alt={delve(headerProps, "logoHeader.imgUrl.data.attributes.alt")}
                                     src={url + delve(headerProps,"logoHeader.imgUrl.data.attributes.url")}/> )}
                        </a>
                    </div>

                    <nav className="page-header__nav navigation ">
                        {headerProps &&
                            (<NavItemsList items={delve(headerProps,"navigations.data")}/>)
                        }
                    </nav>
                </div>
            </div>
        </header>
    )
}

function NavItemsList({items}) {
    const renderedListItems = items.map(item => {
        return (
            <li className="navigation__item">
                <a className="navigation__link" href={delve(item,"attributes.url")}>
                    <span className="menu-item-text">{delve(item,"attributes.title")}</span>
                </a>
            </li>
        )
    })
    return <ul className="navigation__list">{renderedListItems}</ul>
}