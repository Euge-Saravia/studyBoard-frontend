import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react';
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
import LoadingModal from '../../components/modals/loadingModal/LoadingModal'
import { useGithubLogin } from '../../hooks/useGithubLogin';



const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const { data, loading: postLoading, executePost } = usePost('');

    const onSubmit = (formData) => {
        setLoading(true);
        executePost(formData);
    };

    const { handleGithubLogin, githubLoading } = useGithubLogin(navigate);

    return (
        <section className='login-body'>
            <div className='form-page'>
                <div className='form-container'>
                <LoadingModal isOpen={loading || postLoading || githubLoading}/>
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
};

export default LoginPage;