import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { useParams, useHistory, Link } from 'react-router-dom';
import { Menu} from 'antd';
import {AimOutlined} from '@ant-design/icons'
function Navbar () {
    const history = useHistory()
    return (
    <div>
        <Menu 
        theme="dark" defaultSelectedKeys={['2']}
        onClick={({key})=>history.push(key)}
        items={[
                        {label:"Логин", key: "/form_login/", icon:<AimOutlined/> },
                        {label: "Личный кабинет", key: "/profile/", icon:<AimOutlined/>},
                        {label: "Домашняя страница", key: "/", icon:<AimOutlined/>},
                        {label: "Настройки", key: "/settings/", icon:<AimOutlined/>},
                        {label: "Служба поддержки", key: "/supporting/", icon:<AimOutlined/>},
                        ]}>

        </Menu>
    
    
    </div>
    );
}
export default Navbar;