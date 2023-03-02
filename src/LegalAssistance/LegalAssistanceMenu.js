import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HourglassOutlined, ThunderboltOutlined, LaptopOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useAuth } from "../Context/AuthContext";
function ProfileMenu (props) {
  console.log(useAuth()) 
  const items = [
  {
    label: <Link to={"/profile/"+props.user+"/"+props.link_1}>{props.name_1}</Link>,
    key: 'ma',
    icon: <HourglassOutlined />,
  },
  {
    label: <Link to={"/profile/"+ props.user+"/"+props.link_2}>{props.name_2}</Link>,
    key: 'mail',
    icon: <ThunderboltOutlined />,
    
  },
  {
    label: <Link to={"/profile/"+ props.user+"/"+props.link_3}>{props.name_3}</Link>,
    key: 'SubMenu',
    icon: <LaptopOutlined />,
  },
  
];
return(
    <Menu mode="horizontal" items={items} />
);
}

export default ProfileMenu;