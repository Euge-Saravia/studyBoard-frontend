import React, { useState } from 'react'
import SmallButton from '../../buttons/smallButton/SmallButton'
import "./studyGroupModal.scss"

const StudyGroupModal = ({ isOpen, onClose, onSubmit }) => {
    const [groupTitle, setGroupTitle] = useState('')
    const [boardTitle, setBoardTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ groupTitle, boardTitle })
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className='modal-overlay-group'>
            <div className='modal-content-group'>
                <h5 className='title-modal'>Crear nuevo grupo de estudio</h5>
                <form onSubmit={handleSubmit} className='form-container'>
                    <div className='form-group'>
                        <label>Nombre de Grupo: </label>
                        <input
                        type='text'
                        id='groupTitle'
                        value={groupTitle}
                        onChange={(e) => setGroupTitle(e.target.value)} required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Título del Board: </label>
                        <input
                        type='text'
                        id='boardTitle'
                        value={boardTitle}
                        onChange={(e) => setBoardTitle(e.target.value)} required
                        />
                    </div>
                    <div className='buttons-modal-group'>
                        <SmallButton text="Crear Grupo"/>
                        <SmallButton type="variant2" text="Cancelar" onClick={onClose} />
                    </div>
                </form>

            </div>

        </div>
    )
}

export default StudyGroupModal