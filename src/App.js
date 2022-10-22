import logo from './logo.jpg';
import React from 'react';
import { ReactDOM } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, DatePicker, Space, version } from "antd";
import "antd/dist/antd.css";
import classes from './App.module.css';
import FormRegistration from './FormsRegistration/FormRegistration'
import Navbar from './NavBar/NavBar';
import Form_login from './FormsRegistration/Form_login';
import Profile from './Profile/Profile';
import { useWatch } from 'antd/lib/form/Form';

function App() {
  return (
     <BrowserRouter>
      <header className={classes.app_header}>
        <img src={logo} id={classes.logo} alt="logo" />
      </header>
      <div className= {classes.app_wrapper_content}>
      <Navbar/>      
      <Route path='/form_registration' component={FormRegistration} /> 
      <Route path= '/form_login' component={Form_login}/>
      <Route path='/profile/:id_login?' component={Profile} />
    </div>
    </BrowserRouter>
    
  );
}
export default App; 

