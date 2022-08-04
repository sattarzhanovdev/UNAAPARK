import React from 'react'

const FormButtons = ({ title, handleSubmit }) => {
    return (
        <div>
            <button onClick={e => {
                e.preventDefault()
                handleSubmit()
            }}>
                {title}
            </button>
        </div>
    )
}

export default FormButtons
