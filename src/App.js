import logo from './logo.jpg';
import React from 'react';
import { ReactDOM } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, DatePicker, Space, version } from "antd";
import "antd/dist/antd.css";
import classes from './App.module.css';
import AfterRegistrationUserKlient from './AfterRegistrationUserKlient/AfterRegistrationUserKlient';
import ConclusianContact from './ConclusianContrtact/ConclusianContrtact';
import FormRegistration from './FormsRegistration/FormRegistration'
import ILA from './ILA/ILA';
import ILA_anketa from './ILA-anketa/ILA_anketa';
import ILA_end from './ILA_end/ILA_end';
import ILA_search from './ILA_search/ILA_search';
import LegalAssistance from './LegalAssistance/LegalAssistance'
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
      < AfterRegistrationUserKlient/>
      <ConclusianContact/>
      <Route path='/form_registration' component={FormRegistration} /> 
      <Route path= '/form_login' component={Form_login}/>
      <Route path='/profile/:id_login?' component={Profile} />
      
      <ILA/>
      <ILA_anketa/>
      <ILA_end/>
      <ILA_search/>
      <LegalAssistance/>
    </div>
    </BrowserRouter>
    
  );
}

export default App; 
