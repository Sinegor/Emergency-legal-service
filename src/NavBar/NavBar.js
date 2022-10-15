import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';
function Navbar () {
    return (
    <nav className= {classes.navBar}>
                <h2 className= {classes.H2_1}>Меню:</h2>
                    <ul className={classes.ul_nav}>
                        <li>
                            <Link to="/form_login">Логин</Link>
                        </li>
                        <li>
                            <Link to="/Profile">Личный кабинет</Link>
                        </li>
                        <li>
                            <Link to="/immediate_legal_assistance">Срочная юридическая помощь</Link>
                        </li>
                        <li>
                            <Link to="">Спасение</Link>
                        </li>
                        <li>
                            <Link to="">Доска объявлений</Link>
                        </li>
                        <li>
                            <Link to="/">Домашняя страница</Link>
                        </li>
                    </ul>
                
    </nav>
    );
}
export default Navbar;