import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../hooks/validationSchemas'
import './loginPage.scss'
import '../../components/buttons/mainButton/mainButton.scss'
import Input from '../../components/inputs/Input'
import MainButton from '../../components/buttons/mainButton/MainButton'
import githubIcon from '/assets/icons/github-mark.svg'


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })
    return (
        <section className='login-body'>
            <div className='form-page'>
                <div className='form-container'>
                    <form className='form-content'>
                        <img className='logo' src='/logo\Icon-Variant2.svg' />
                        <div className='form-content'>
                            <Input id="email" border="border" type="text" placeholder="Correo electrónico" />
                            {errors.email && <p className="errors">{errors.email.message}</p>}
                            <Input {...register("password")} id="password" type="password" border="border" placeholder="Contraseña" />
                            {errors.password && <p className="errors">{errors.password.message}</p>}
                        </div>
                        <div className='buttons'>
                            <MainButton color="accent" text="Iniciar sesión"/>
                            <MainButton color="secondary" text="Iniciar sesión con github" iconVisibility="icon-visible" iconButton={githubIcon} label="githubIcon" />
                        </div>
                    </form>
                    <div>
                        <p>¿No tienes cuenta aún?</p>
                        <span>
                            <p>Regístrate</p>
                            <a href='/signup'>aquí</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage