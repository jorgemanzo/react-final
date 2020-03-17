import React from 'react'
import { NavLink } from 'react-router-dom'
import Media from 'react-media'
import '../styles/NavBar.css'
import home from '../images/home.svg'
import location from '../images/map-pin.svg'
import settings from '../images/settings.svg'
const NavBar = () => {
    const linksData = [
        { to: '/', label: 'Home', svg: home },
        { to: '/main', label: 'My Locations', svg: location },
        { to: '/settings', label: 'Settings', svg: settings },
    ]

    const Link = (props) => {
        return (
            <li className="link">
                <NavLink exact to={props.to}>
                    {props.label}
                </NavLink>
            </li>
        )
    }
    const Icons = () => {
        return (
            <div className="navIconsContainer">
                {
                    linksData.map((lin, index) => (
                        <div key={index} className="navIcon">
                            <NavLink exact to={lin.to}>
                                <img src={lin.svg} alt={lin.label} />
                            </NavLink>
                        </div>
                    ))
                }
            </div>
        )
    }
    const Links = (matches) => {
        console.log("small?", matches.small)
        let res
        if (matches.small) {
            res = <Icons />
        } else {
            res = (
                <ul className='navbar'>
                    {
                        linksData.map((lin, index) => (
                            <Link key={index} to={lin.to} label={lin.label} />
                        ))
                    }
                </ul>
            )
        }
        return (
            res
        )
    }
    return (
        <div className="navContainer">
            <Media queries={{
                small: "(max-width: 900px)"
            }}>
                {Links}
            </Media>
        </div>
    )
}

export default NavBar