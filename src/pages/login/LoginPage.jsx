import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../hooks/validationSchemas'
import './loginPage.scss'
import '../../components/buttons/mainButton/mainButton.scss'
import Input from '../../components/inputs/Input'
import MainButton from '../../components/buttons/mainButton/MainButton'
import githubIcon from '/assets/icons/github-mark.svg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import usePost from '../../hooks/usePost'
import { useState, useEffect } from "react";


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })

    const [loading, setLoading] = useState(false)
    const [githubLoading, setGithubLoading] = useState(false)
    const navigate = useNavigate()

    const { data, loading: postLoading, error, executePost } = usePost('')
    

    const onSubmit = (formData) => {
        setLoading(true)
        executePost(formData)
    }

    const handleGithubLogin = () => {
        setGithubLoading(true)
        window.location.href = 'http://localhost:4001/oauth2/authorization/github'
    };

    useEffect(()=>{
        if (data) {
            const date = new Date();
            date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
            let expires = "expires=" + date.toUTCString();
            
            document.cookie = `authToken=${data.token}; ${expires}; path=/`;
            document.cookie = `user=${data.user.id}; ${expires}; path=/`;
            setLoading(false)
            navigate("/home");
        }
    }, [data, navigate])

    return (
        <section className='login-body'>
            <div className='form-page'>
                <div className='form-container'>
                {loading || postLoading || githubLoading ? (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <div className="spinner"></div>
                                <p className='modal-text'>Cargando, por favor espera...</p>
                            </div>
                        </div>
                    ) : (
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
                            <MainButton color="secondary" text="Iniciar sesión con github" iconVisibility="icon-visible" iconButton={githubIcon} label="githubIcon"
                            type="button"
                            onClick={handleGithubLogin} />
                        </div>
                    </form>
                    )}
                    <div>
                        <p>¿No tienes cuenta aún?</p>
                        <span className='login-span'>
                            <p className='login-text'>Regístrate</p>
                            <Link to='/signup' className='link'>aquí</Link>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage