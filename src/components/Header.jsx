import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Account from './Account'
import { UserAuth } from '../context/AuthContext'

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Phụ kiện",
        path: "/accessories"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    }
]

const Header = () => {
    const countItem = useSelector((state) => state.cartItems.value)
    const headerRef = useRef(null)
    const { pathname } = useLocation()
    const { user } = UserAuth()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item cart" style={{ position: "relative" }}>
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                                {countItem.length > 0 ?<span style={styleBadge}> {countItem.length === 0 ? "" : countItem.length}</span> : ""}
                                
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">

                            {!user ? (<Link to='/signin'>
                                <i className="bx bx-user"></i>
                            </Link>) : <Account />}
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const styleBadge = {
    position: "absolute",
    top: "-10px",
    right: "0px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    textAlign: " center",
    backgroundColor: "#e94560",
    fontSize: "12px",
    color: "#fff",
}
export default Header
