import React from "react";
import { Redirect, Switch, Route, Router, BrowserRouter } from "react-router-dom";
import RouteGuard from "./RouteGuard"

//history
import { history } from './Helpers/history';

//pages
import Profile from "./Profile/Profile"
import LegalAssistance from "./LegalAssistance/LegalAssistance"
import FormRegistration from "./FormsRegistration/FormRegistration";
import Form_login from "./FormsRegistration/Form_login";
function Routes (){
    return (
        <BrowserRouter  >
        <Switch>
        <RouteGuard exact 
                    path='/profile/'   
                    component={Profile}    
                    />
        <RouteGuard exact 
                    path = 'legal_assistance'
                    component={LegalAssistance}/>
        
        <Route path='/form_registration' component={FormRegistration} /> 
        <Route path= '/form_login' component={Form_login}/>
  
        </Switch>
        <Redirect to ='/'/>
        </BrowserRouter>

    );
}



export default Routes