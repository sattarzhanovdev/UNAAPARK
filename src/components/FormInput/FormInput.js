import React from 'react'
import cls from '../../pages/Register/EmailRegist/EmailRegist.module.scss'
const FormInput = (
    {
        type,
        name,
        placeholder,
        defaultValue,
        setInputsValue,
    }
) => {
    return (
        <div className={cls.input_block}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={(e) => setInputsValue(e.target.value)}
                className={cls.input}
            />
        </div>
    )
}

export default FormInput
