import React from 'react';
//import 'antd/dist/reset.css';
import {Form,Input,Button, Checkbox} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import axios from 'axios';

import "../css/Login_test.css"


export default function Logintest(){
    
    const onFinish = values => {
        const {username , password} = values
        axios.post('/validatePassword', {username, password})
        .then(res => {
            if(res.data.validation){
                alert('Your password is correct')
            }
            else{
                alert("Your password is noot correct, try again")
            }
        })
    }
    
    return(
        <div className="login-box">
             <Form name="normal_login" className="login-form" initialValues={{remember: true, }} onFinish={onFinish}>
                <Form.Item name="username" rules={[{required: true, message: 'Please input your Username!',}, ]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item name="password" rules={[{required: true, message: 'Please input your Password!',},]}>
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                    Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
                </Form>
                        
        </div>

    );
}