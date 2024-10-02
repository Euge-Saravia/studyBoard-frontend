import React from 'react'
import SmallButton from '../../buttons/smallButton/SmallButton'
import './alertModal.scss'

const AlertModal = ({ isOpen, onClose, title, errorText }) => {
    if (!isOpen) return null

    return (
        <div className='modal-overlay-alert'>
            <div className='modal-content-alert'>
                <div className='alert'>
                    <svg className='svg-alert' xmlns="http://www.w3.org/2000/svg" width="22" height="23" fill="none" viewBox="0 0 22 23">
                        <path fill="#ff0000" d="M9.952 10.404v6.569c0 .601.466 1.096 1.048 1.096.575 0 1.048-.488 1.048-1.096v-6.569c0-.608-.466-1.096-1.048-1.096-.575 0-1.048.488-1.048 1.096Zm-.262-4.11c0 .756.588 1.37 1.31 1.37.722 0 1.31-.614 1.31-1.37 0-.754-.588-1.37-1.31-1.37-.722 0-1.31.616-1.31 1.37ZM2.096 11.5c0-5.132 3.995-9.308 8.904-9.308s8.904 4.176 8.904 9.308-3.995 9.308-8.904 9.308-8.904-4.176-8.904-9.308ZM0 11.5C0 17.855 4.928 23 11 23s11-5.145 11-11.5S17.078 0 11 0 0 5.145 0 11.5Z" />
                    </svg>
                    <h5 className='title-modal-alert'>{title}</h5>
                    <p>{errorText}</p>
                </div>
                <SmallButton text="Aceptar" type='alert' onClick={onClose} />

            </div>
        </div>
    )
}

export default AlertModal