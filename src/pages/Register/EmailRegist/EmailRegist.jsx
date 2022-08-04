import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleAuth from '../../Login/GoogleAuth/GoogleAuth'
import cls from './EmailRegist.module.scss'
import FormInput from '../../../components/FormInput/FormInput'
import FormButtons from '../../../components/FormButton/FormButtons'
import { handleRegistWithEmail } from '../../../firebase/firebase'
import { useAuth } from '../../../providers/useAuth'
import { modalAlert } from '../../../components/Alerts'




const EmailRegist = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const isValid = () => {
        if (!email.length || !password.length || !name.length) {
            modalAlert.notSaved('Заполните все поля', '', 'error' , 'OK')
        } else {
            handleRegistWithEmail(email, password, name)
        }
    }

    return (
        <React.Fragment>
            <div className={cls.login}>
                <form>
                    <h1>Регистрация</h1>
                    <FormInput
                        type={'text'}
                        name={'userName'}
                        placeholder={'Имя пользователя'}
                        defaultValue={name}
                        setInputsValue={setName}
                    />
                    <FormInput
                        type={'email'}
                        name={'Email'}
                        placeholder={'Адрес электронной почты'}
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
                            isValid()
                        }}
                    >
                        Зарегистрироваться
                    </button>
                    <p>
                        <span></span>
                        <li>или</li>
                        <span></span>
                    </p>
                    <p className={cls.havent}>
                        Уже есть аккаунт?
                        <Link to='/auth/login'>
                            Войти
                        </Link>
                    </p>
                    <GoogleAuth />
                </form>
            </div>
        </React.Fragment>
    )
}

export default EmailRegist
