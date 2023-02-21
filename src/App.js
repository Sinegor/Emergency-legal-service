import React from 'react';
import {BrowserRouter, Route, useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "antd/dist/antd.css";
import { useWatch } from 'antd/lib/form/Form';
import {useState} from 'react'
import { Breadcrumb, Layout,} from 'antd';

import FormRegistration from './FormsRegistration/FormRegistration'
import Navbar from './NavBar/NavBar';
import Form_login from './FormsRegistration/Form_login';
import Profile from './Profile/Profile';
import IlaAnketa from './ILA-anketa/IlaAnketa';
import LegalAssistance from './LegalAssistance/LegalAssistance';
import Main from './Main/Main';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <BrowserRouter>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Navbar/>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            

            }}
          >
          <h1
          style={{
            color:'greenyellow'}
          }
          > Сервис неотложной юридической помощи</h1>
          </Header>
          <Content
            style={{
              backgroundColor: 'blueviolet'
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 10px',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
            <Route exact path='/' component={Main} /> 
            <Route exact path='/form_registration' component={FormRegistration} /> 
            <Route exact path= '/form_login' component={Form_login}/>
            <Route exact path='/profile/' component={Profile} /> 
            <Route exact path='/ila_anketa/' component={IlaAnketa}/>  
            <Route exact path= '/legal_assistanse' component={LegalAssistance} />       
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              backgroundColor: 'skyblue'
            }}
          >
          
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>    
  );
}
export default App; 

