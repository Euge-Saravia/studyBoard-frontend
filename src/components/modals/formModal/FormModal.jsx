import SmallButton from '../../buttons/smallButton/SmallButton'
import "./formModal.scss"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const FormModal = ({ isOpen, onClose, onSubmit, validationSchema, title, fields, submitButtonText = "Submit", cancelButtonText = "Cancel", color }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    })

    const onFormSubmit = (data) => {
        onSubmit(data)
        onClose()
    }

    const handleTextareaChange = (event) => {
        const textarea = event.target
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
    }

    if (!isOpen) return null

    return (
        <div className='modal-overlay-group'>
            <div className='modal-content-group'>
                <h5 className={`title-modal ${color}`}>{title}</h5>
                <form onSubmit={handleSubmit(onFormSubmit)} className='form-container'>
                {fields.map(({ fieldLabel, fieldName, fieldType }) => (
                        <div key={fieldName} className='form-group'>
                            <label>{fieldLabel}</label>
                            {fieldType === 'textarea' ? (
                                <textarea
                                    {...register(fieldName)}
                                    id={fieldName}
                                    onChange={handleTextareaChange}
                                    className={errors[fieldName] ? 'input-error' : ''} />
                            ) : (
                                <input
                                    type={fieldType || 'text'}
                                    {...register(fieldName)}
                                    id={fieldName}
                                    className={errors[fieldName] ? 'input-error' : ''} />
                            )}
                            {errors[fieldName] && <span className='error-message'>{errors[fieldName].message}</span>}
                        </div>
                    ))}
                    <div className='buttons-modal-group'>
                        <SmallButton text={submitButtonText} type='submit' />
                        <SmallButton type="variant2" text={cancelButtonText} onClick={onClose} />
                    </div>
                </form>

            </div>

        </div>
    )
}

export default FormModal