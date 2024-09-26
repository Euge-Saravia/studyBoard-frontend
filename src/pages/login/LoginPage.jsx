import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../hooks/validationSchemas';
import './loginPage.scss';
import '../../components/buttons/mainButton/mainButton.scss';
import Input from '../../components/inputs/Input';
import MainButton from '../../components/buttons/mainButton/MainButton';
import githubIcon from '/assets/icons/github-mark.svg';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit = (data) => {
        // Aquí puedes manejar el inicio de sesión normal, haciendo una llamada a tu API
        console.log(data);
    };

    return (
        <section className='login-body'>
            <div className='form-page'>
                <div className='form-container'>
                    <form className='form-content' onSubmit={handleSubmit(onSubmit)}>
                        <img className='logo' src='/logo/Icon-Variant2.svg' alt="Logo" />
                        <div className='form-content'>
                            <Input 
                                {...register("email")} 
                                id="email" 
                                border="border" 
                                type="text" 
                                placeholder="Correo electrónico" 
                            />
                            {errors.email && <p className="errors">{errors.email.message}</p>}
                            <Input 
                                {...register("password")} 
                                id="password" 
                                type="password" 
                                border="border" 
                                placeholder="Contraseña" 
                            />
                            {errors.password && <p className="errors">{errors.password.message}</p>}
                        </div>
                        <div className='buttons'>
                            <MainButton color="accent" text="Iniciar sesión" type="submit" />
                            <MainButton
                                color="secondary"
                                text="Iniciar sesión con GitHub"
                                iconVisibility="icon-visible"
                                iconButton={githubIcon}
                                label="githubIcon"
                                onClick={() => {
                                    window.location.href = "http://localhost:4001/oauth2/authorization/github"; // Asegúrate de que esta URL sea correcta
                                }}
                            />
                        </div>
                    </form>
                    <div>
                        <p>¿No tienes cuenta aún?</p>
                        <span>
                            <p>Regístrate</p>
                            <Link to='/signup'>aquí</Link>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;