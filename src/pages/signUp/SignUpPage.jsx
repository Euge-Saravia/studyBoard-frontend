import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { singUpSchema } from '../../hooks/validationSchemas'
import './signUpPage.scss'
import '../../components/buttons/mainButton/mainButton.scss'
import Input from '../../components/inputs/Input'
import MainButton from '../../components/buttons/mainButton/MainButton'
import githubIcon from '/assets/icons/github-mark.svg'


const SignUpPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(singUpSchema)
    })
    return (
        <div className='form-page'>
            <div className='form-container'>
                <form className='form-content'>
                    <img className='logo' src='/logo\Icon-Variant2.svg' />
                    <div className='form-content'>
                        <Input id="name" border="border" type="text" placeholder="Nombre" />
                        {errors.name && <p className="errors">{errors.name.message}</p>}
                        <Input id="email" border="border" type="text" placeholder="Correo electrónico" />
                        {errors.email && <p className="errors">{errors.email.message}</p>}
                        <Input {...register("password")} id="password" type="password" border="border" placeholder="Contraseña" />
                        {errors.password && <p className="errors">{errors.password.message}</p>}
                        <Input {...register("confirmPassword")} id="confirmPassword" type="password" border="border" placeholder="Repite la contraseña" />
                        {errors.confirmPassword && <p className="errors">{errors.confirmPassword.message}</p>}
                    </div>
                    <div className='buttons'>
                        <MainButton className="btn" color="accent" text="Registrarse" iconVisibility="icon-hidden" iconButton={null} />
                        <MainButton className="btn" color="secondary" text="Registrarse con github" iconButton={githubIcon} label="githubIcon" />
                    </div>
                </form>
                <div>
                    <p>¿Ya estás registrado?</p>
                    <span>
                        <p>Inicia sesión</p>
                        <a>aquí</a>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default SignUpPage