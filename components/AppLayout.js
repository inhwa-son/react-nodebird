import React, { useState } from 'react';
import propTypes from 'prop-types'
import Link from 'next/link'
import { Menu, Input, Row, Col } from 'antd'
import styled from 'styled-components'

import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginFrom'

const SearchInput = styled(Input.Search)`
    verticalAlign: middle
`

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggendIn] = useState(false)
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggendIn={setIsLoggendIn} /> : <LoginForm setIsLoggendIn={setIsLoggendIn} />}
                </Col>
                <Col xs={24} md={12} >
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://todo.7hollys.xyz" target="_balank" rel="noreferrer noopener">Go To Todo</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children: propTypes.node.isRequired,
}

export default AppLayout