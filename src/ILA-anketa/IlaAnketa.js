import React from 'react';
import {useState} from 'react'
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';

function ILA_anketa(props){  
  
return (
  <Form
      size ="large" 
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
     // onValuesChange={onFormLayoutChange}
      
    >
    
      <Form.Item 
      label="Фамилия"
      name="surname"
      rules={[{ required: true, 
                  }]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
      label="Имя"
      name="name"
      rules={[{ required: true, 
                  }]}>
        <Input />
      </Form.Item>    
      <Form.Item 
      label="Отчество"
      name="fathername"
      rules={[{ required: true, 
                  }]}>
        <Input /> 
      </Form.Item>
      <Form.Item 
      label="Телефон"
      name="phone"
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
        <Input /> 
      </Form.Item>
      <Form.Item 
      label="Область права"
      name= "kindOfLaw"
      rules={[
          {
            required: true,
            message: 'Укажите область права, в которой необходима помощь',
            
          },
        ]}
      >
        <Cascader
          options={[
            {
              value: "criminalLaw",
              label: 'Уголовное право',
              children: [
                {
                  value: 'generalCrime',
                  label: 'Общеуголовные преступления',
                },
                {
                  value: 'economicCrime',
                  label: 'Экономические преступления',
                },
                {
                  value: 'taxCrime',
                  label: 'Налоговые преступления',
                },
                {
                  value: 'malfeasance',
                  label: 'Должностные преступления',
                },
                {
                  value: 'roadAcsidense',
                  label: 'В области дорожного движения',
                },
                {
                  value: 'drugCriminal',
                  label: 'наркотики',
                },
              ],
            },
            {
              value: "civillLaw",
              label: 'Гражданское право',
              children:[
                {
                  value: 'corporationLaw',
                  label: 'Корпоративное право',
                },
                {
                  value: 'contracrLaw',
                  label: 'Договорное право',
                },
              ]

            },
            {
              value: "administrativeLaw",
              label: 'Административное право',
              children:[
                {
                  value: 'general',
                  label: 'общие правонарушения',
                },
                {
                  value: 'tax',
                  label: 'налоговые правонарушения',
                },
              ]

            }
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>  
)
};
export default ILA_anketa;
