import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'
import logo from '../images/logo.png'

const list = [
    { name: "start", path: "/", exact: true },
    { name: "terminarz", path: "/Timetable" },
    { name: "ranking", path: "/Ranking" },
    { name: "zasady", path: "/Rules" },
    { name: "kontakt", path: "/Contact" },
]



const Navigations = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <div className="app">
            <header>
                <img src={logo} alt="Logo" />
                <button>Zaloguj</button>
                <button>Rejestracja</button>
                <nav>
                    <ul className="navigation">
                        {menu}
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navigations;