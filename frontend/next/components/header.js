import delve from "dlv";
import Image from 'next/image';
import {imageLoader} from "@/lib/image";

export default function Header({ headerProps }) {
    return (
        <header className="page-header" id="up">
            <div className="container">
                <div className="page-header__wrapper">
                    <div className="page-header__logo">
                        <a className="logo__link" href="">
                            { headerProps &&
                                (<Image className="logo__img"
                                     loader={imageLoader}
                                     alt={delve(headerProps, "logoHeader.imgUrl.data.attributes.alt")}
                                     src={delve(headerProps,"logoHeader.imgUrl.data.attributes.url")}
                                     width={delve(headerProps,"logoHeader.imgUrl.data.attributes.width")}
                                     height={delve(headerProps,"logoHeader.imgUrl.data.attributes.height")}
                                     priority
                                />)
                            }
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