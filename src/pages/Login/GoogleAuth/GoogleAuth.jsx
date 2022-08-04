import React from 'react'
import cls from './GoogleAuth.module.scss'
import Google from  '../../../components/images/Google.png'
import { handleLoginWithGoogle } from '../../../firebase/firebase'

const GoogleAuth = () => {
    return (
        <div>
            <button
                className={cls.button}
                onClick={e => {
                    e.preventDefault()
                    handleLoginWithGoogle()
                }}
                >
                <img src={Google} alt="Google-Logo"/>
                Войти с Google
            </button>
        </div>
    )
}

export default GoogleAuth
