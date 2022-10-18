import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import classes from './Profile.module.css';

function Profile () {
    const params = useParams()
    let current_login = params.id_login;
    if(current_login){
        console.log(current_login);
    return (
    <div className= {classes.profile_list}>
                <h2>Привет {current_login}!</h2>
                <ul className={classes.ul_profile}>
                        <li>
                            <Link to="/profile/current_orders/">Текущие заказы</Link>
                        </li>
                        <li>
                            <Link to="/profile/personal_information/">Личные данные</Link>
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
                        
                    </ul>
                
    </div>
    );
    } else{
        console.log(current_login);
        return (
            <div className= {classes.profile_list}>
                <h2> <Link to="/form_login">Для продолжения вам необходимо залогиниться</Link> </h2>
            </div>
     );           
    };
    }
export default Profile;