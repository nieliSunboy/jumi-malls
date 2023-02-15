import React, { useState } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { myAxios } from "../../utils/axios";
import { setCookies, setToken } from "../../utils/anth";
import { LoginApi } from '../../api/index';
import { useNavigate } from 'react-router-dom'


export const LoginForm: React.FC = () => {

	const routerNavigate = useNavigate();
	// const [ info, setInfo ] = useState(null);
	
	const onFinish = (values: any) => {
			// setInfo(values);
			// 开始登录操作
			myAxios.post(LoginApi.login, {
				userName: values.username,
				password: values.password
			}).then(res => {
				console.log(res)
				setToken(res.data);
				setCookies('refresh_token', res.data);
				routerNavigate('/sys/home');
			})
			
	};

    return (
      <div className="login-box">
				<fieldset className="login-contain">
						<legend className="legend">用户登录</legend>
						<Form
								name="normal_login"
								className="login-form"
								initialValues={{ remember: true }}
								onFinish={onFinish}
						>
								<Form.Item
										name="username"
										rules={[{ required: true, message: 'Please input your Username!' }]}
								>
										<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
								</Form.Item>
								<Form.Item
										name="password"
										rules={[{ required: true, message: 'Please input your Password!' }]}
								>
										<Input
												prefix={<LockOutlined className="site-form-item-icon" />}
												type="password"
												placeholder="Password"
										/>
								</Form.Item>
								<Form.Item>
										<Form.Item name="remember" valuePropName="checked" noStyle>
												<Checkbox>记住密码</Checkbox>
										</Form.Item>
										{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
										<a className="login-form-forgot" href="">
												跳转主页
										</a>
								</Form.Item>

								<Form.Item>
										<Button type="primary" htmlType="submit" className="login-form-button">
												Log in
										</Button>
								</Form.Item>
						</Form>
				</fieldset>
			</div>
    )
}

