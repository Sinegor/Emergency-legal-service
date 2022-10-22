import React from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import { useParams } from 'react-router-dom';
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
                            <Link to="/profile/">Личный кабинет</Link>
                        </li>
                    
                        <li>
                            <Link to="/">Домашняя страница</Link>
                        </li>
                        <li>
                            <Link to="/settings/"> Настройки </Link>
                        </li>
                        <li>
                            <Link to="/supporting/"> Служба поддержки </Link>
                        </li>
                    </ul>
                
    </nav>
    );
}
export default Navbar;