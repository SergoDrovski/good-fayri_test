import delve from "dlv";
import Image from 'next/image';
import React, {useState, useEffect} from "react";
import {imageLoader} from "@/lib/image";
import {scroll} from "@/lib/animate";

export default function Header({ headerProps }) {
    //подключение скролла
    useEffect(() => {
        scroll();
    }, [""]);
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
                    {headerProps &&
                        (<NavItemsList items={delve(headerProps,"navigations.data")}/>)
                    }
                </div>
            </div>
        </header>
    )
}

function NavItemsList({items}) {
    const [menuClass, setMenuClass] = useState("");

    function openClick(e) {
        e.preventDefault();
        let popup = document.querySelector('.pop-up__wrapper');
        if(popup) {
            popup.querySelector('.pop-up__btnClose').click();
        }
        let newClas = menuClass === 'openMenu' ? 'closeMenu' : 'openMenu';
        setMenuClass(newClas);
    }


    const renderedListItems = items.map(item => {
        return (
            <li className="navigation__item">
                <a className="navigation__link" href={delve(item,"attributes.url")}>
                    <span className="menu-item-text">{delve(item,"attributes.title")}</span>
                </a>
            </li>
        )
    })
    return (
        <nav className={`page-header__nav navigation ${menuClass}`}>
            <ButtonMenu menuStatus={menuClass} openClick={openClick}/>
            <div className="navigation-wrapp__list">
                <ul className="navigation__list">
                    {renderedListItems}
                </ul>
            </div>
        </nav>
    )
}

export function ButtonMenu({ openClick }) {
    return (
        <div className="button-menu button-menu-49 section widget-28" style={{display: 'block'}}>
            <div className="button-menu-top">
                <div
                    onClick={openClick}
                    className={`button-menu-button`}
                >
                    <span className="button-menu-button-icon-line"></span>
                    <span className="button-menu-button-icon-line"></span>
                </div>
                <div className="button-menu-top-inner"></div>
            </div>
        </div>
    )
}