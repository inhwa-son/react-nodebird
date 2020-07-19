import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
    margin-top: 10px;
`

const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value)
    }, [])
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [])

    const style = useMemo(() => ({ marginTop: 10 }), [])  //styled 사용하기 싫을때 사용하는방법

    return (
        <Form>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />

            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>

            <ButtonWrapper style={style}>
                <Button type="primary" htmlFor="submit" loading={false} > 로그인</Button>
                <Link href="/signup" ><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </Form>
    )

}
export default LoginForm