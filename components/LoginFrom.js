import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'


const ButtonWrapper = styled.div`
    margin-top: 10px;
`
const FormWrapper = styled(Form)`
    padding: 10px
`

const LoginForm = ({ setIsLoggendIn }) => {
    const style = useMemo(() => ({ marginTop: 10 }), [])  //styled 사용하기 싫을때 사용하는방법

    const [id, onChangeId] = useInput('')
    const [password, onChangePassword] = useInput('')

    const onSubmitForm = useCallback(() => {
        console.log('id, pwd', id, password)
        setIsLoggendIn(true)
    }, [id, password])

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>

            <ButtonWrapper style={style}>
                <Button type="primary" htmlType="submit" loading={false} >로그인</Button>
                <Link href="/signup" ><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    )

}

LoginForm.prototype = {
    setIsLoggendIn: PropTypes.func.isRequired,
}
export default LoginForm