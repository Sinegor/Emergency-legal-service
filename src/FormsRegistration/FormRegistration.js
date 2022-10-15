import React from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {  AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import classes from './Form_registration.module.css'
import { useState } from "react";

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
function FormRegistration(props){
  const { Option } = Select;
  const [login, setLogin] = useState("");
  const [password, setPassward] = useState("");
  const [userMail, setUserMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let getData = () =>{
    console.log(login+""+password+""+userMail+""+phoneNumber)
  };    
  return(
      <div className={classes.formWrapper}>
      <Form
      //{...formItemLayout}
      //form={form}
      className= {classes.registration}
      name="register"
      //onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input
        value = {userMail}
        onChange = {(e)=>setUserMail(e.target.value)}
         />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          {
            min: 6,
            message: 'Пароль слишком короткий'
          }
        ]}
        
      >
        <Input.Password 
          value = {password}
          onChange = {(e)=>setPassward(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input
        value ={login}
        onChange = {(e)=>setLogin(e.target.value)}
         />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
          {
            min: 8,
            message: "Введите корректный телефонный номер"
          }
        ]}
      >
        <Input
          //addonBefore={prefixSelector}
          value = {phoneNumber}
          onChange = {(e)=>setPhoneNumber(e.target.value)}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit" onClick={getData}>
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
    );
}
export default FormRegistration