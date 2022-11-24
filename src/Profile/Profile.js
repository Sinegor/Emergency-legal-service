import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import classes from './Profile.module.css';
import Form_login from '../FormsRegistration/Form_login';
import { ReactDOM } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ILA_anketa from '../ILA-anketa/ILA_anketa'
import ProfileMenu from './ProfileMenu';
//import axios from 'axios';
function Profile () {
    const params = useParams()
    let current_login = params.id_login;
    if(current_login){
        console.log(current_login);
    return (
    <BrowserRouter>
    <div className= {classes.profile_list}>
    <ProfileMenu user={current_login}
    name_1 = "Срочная юридическая помощь"
    name_2 = "Спасение"
    name_3 = "Доска заказов"
    link_1 = "ila_anketa"
    link_2 = "legal_salvation"
    link_3 = "order_board"
    />       
        <Route path='/*/ila_anketa' render={()=><ILA_anketa user={current_login}/>}/>
        <Route path='/*/legal_salvation' render={()=><ILA_anketa user={current_login}/>}/>
        <Route path='/*/order_board' render={()=><ILA_anketa user={current_login}/>}/>
    </div>
    
    </BrowserRouter>
    );
    } else{
        console.log(current_login);
        return (
              <Form_login/>  
            );           
    };
    }
export default Profile;