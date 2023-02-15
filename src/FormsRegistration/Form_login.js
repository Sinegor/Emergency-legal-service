import React from "react";
import classes from './Form_login.module.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Form_login () {
  const [username, setUsername] = useState("");/*задаётся свойство login в State, ему 
  присваивается начальное значение "" и возвращается метод(функция)*/
  const [password, setPassward] = useState("")
  const history = useHistory()
  let usernameData = {};
  return (
     <div className={classes.formWrapper}>
     <Form
      name="normal_login"
      className= {classes.login_form}
      initialValues={{ remember: true }}
      size = "large"
      onFinish={() =>{ 
                let url = "http://127.0.0.1:8000/auth"
                axios.post(url,{
                'username':username,
                "password":password  
                }).then(function(response){
                  console.log(response.headers)

                }).catch(function(error){
                  console.log(error);
                })
                history.push(`/profile/${username}`)}}  // используем обработчик, предложенный Ant Design, работает, как onClick // 
       >
      <Form.Item
        name="username"
        rules={[{ required: true, 
                  message: 'Please input your Username!'
                  
                  }]}
        >
        <Input prefix={<UserOutlined className="site-form-item-icon" />}
         
         placeholder="Username" 
         value={username}
         onChange = {(e) => setUsername(e.target.value)} /* e - объект синтетического события, в данном случае 
         onChange, target - объект, указывающий на место, где "произошло событие" (в данном случае форма), 
         ну и value - непосредственно то, что было введено в форму. Соответственно это значение мы устанавливаем
          для свойства login в объекте State */ 
           
         />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
        
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value = {password}
          onChange = {(e)=>setPassward(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Link to="" className= {classes.login_form_forgot}>Forgot password</Link>
      </Form.Item>
      <Form.Item>      
        <Button type="primary" htmlType="submit" 
        className = {classes.login_form_button}
        >
          Log in
        </Button>
        Or <Link to="/form_registration">register now!</Link>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Form_login;