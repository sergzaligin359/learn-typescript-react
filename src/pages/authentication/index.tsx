import { Button, Checkbox, Form, Input } from 'antd'

import useFetch from 'hooks/useFetch'
import React, {useEffect, useState} from 'react'
import {Link, useLocation, useParams} from 'react-router-dom'

interface ILogin{
  email: string
  username: string
  password: string
  remember: boolean
}

const Authentication = () => {
  const {pathname} = useLocation<string>()
  const isLogin = pathname === '/global-feed/login'
  const pageTitle = isLogin ? 'Sign In' : 'Sign Up'
  const descriptionLink = isLogin ? '/global-feed/register' : '/global-feed/login'
  const descriptionText = isLogin ? 'Need an account?' : 'Have an account?'
  const apiUrl = isLogin ? '/users/login' : '/users'

  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [remember, setRemember] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);

  console.log('pathname', pathname === '/global-feed/login')
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }

  const onFinish = ({email, username, password, remember}: ILogin) => {
    console.log('Success:', email, username, password, remember);
    setUsername(email)
    setUsername(username)
    setPassword(password)
    setRemember(remember)
    const user = isLogin ? {email, password} : {email, password, username}
    doFetch({
      method: 'post',
      data: {
        user
      }
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }

  console.log('rerender');



  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to={descriptionLink}>{descriptionText}</Link>
            </p>

             <Form
                {...layout}
                name="basic"
                initialValues={{ email, username, password, remember }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
              {!isLogin && (
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input />
                  </Form.Item>
                )}
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" disabled={isLoading}>
                  {pageTitle}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication
