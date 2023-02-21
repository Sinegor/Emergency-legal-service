import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LegalAssistanceMenu from './LegalAssistanceMenu'
import IlaAnketa from '../ILA-anketa/IlaAnketa'
function LegalAssistance(props){
return (
    <BrowserRouter>
    <LegalAssistanceMenu 
    name_1 = "Срочная юридическая помощь"
    name_2 = "Спасение"
    name_3 = "Доска заказов"
    link_1 = "ila_anketa"
    link_2 = "legal_salvation"
    link_3 = "order_board"
    />       
        <Route path='/*/ila_anketa' render={()=><IlaAnketa />}/>
        <Route path='/*/legal_salvation' render={()=><IlaAnketa />}/>
        <Route path='/*/order_board' render={()=><IlaAnketa />}/>
    
    
    </BrowserRouter>
)
};
export default LegalAssistance;
