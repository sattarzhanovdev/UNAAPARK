import React from 'react'
import { useState } from 'react'
import cls from './LoginToAdmin.module.scss'
import FormInput from '../../../components/FormInput/FormInput'

const LoginAdmin = ({error}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <React.Fragment>
            <div className={cls.login}>
                <form>
                    <h1>Войти</h1>
                    <FormInput
                        type={'email'}
                        name={'Email'}
                        placeholder={'Email'}
                        defaultValue={email}
                        setInputsValue={setEmail}
                    />
                    <FormInput
                        type={'password'}
                        name={'Пароль'}
                        placeholder={'Пароль'}
                        defaultValue={password}
                        setInputsValue={setPassword}
                    />
                    <button
                        className={cls.button}
                        onClick={e => {
                            e.preventDefault()
                            localStorage.setItem('email', email)
                            localStorage.setItem('password', password)
                            window.location.reload()
                        }}
                    >
                        Войти
                    </button>

                    <p>{error ? error : ''}</p>
                </form>
            </div>
        </React.Fragment>
    )
}

export default LoginAdmin
