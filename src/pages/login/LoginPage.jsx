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




const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const [loading, setLoading] = useState(false);
    const [githubLoading, setGithubLoading] = useState(false);
    const navigate = useNavigate();
    
    const { data, loading: postLoading, executePost } = usePost('');

    const onSubmit = (formData) => {
        setLoading(true);
        executePost(formData);
    };

    const handleGithubLogin = () => {
        const clientID = "Ov23li8Mgk1hbihsVQKk"; 
        const redirectURI = 'http://localhost:5173/login/'
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}`;
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
    
        if (code) {
            //Mostrar loader
            const finalUrl = "http://localhost:4001/auth/github/callback?code="+code
            fetch(finalUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
         
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(userData => {
                //ocultar loader
                if (userData.token) {
                    const date = new Date();
                    date.setTime(date.getTime() + 24 * 60 * 60 * 60 * 1000); 
                    let expires = "expires=" + date.toUTCString();
                    document.cookie = `authToken=${userData.token}; ${expires}; path=/`;
                    document.cookie = `userId=${userData.user.id}; ${expires}; path=/`;
                    document.cookie = `userName=${userData.user.name}; ${expires}; path=/`;
                    document.cookie = `userEmail=${userData.user.email}; ${expires}; path=/`;
                    document.cookie = `userProfilePicture=${userData.user.avatarUrl}; ${expires}; path=/`;
                    navigate('/home'); 
                } else {
                    //`mostrar un alert con el error
                    console.error("No se recibió un token válido.");
                }
            })
            .catch(error => {
                //ocultar loader
                //`mostrar un alert con el error
                console.error('Error en la autenticación con GitHub:', error);
            });
        }
    }, [navigate]); // Asegúrate de incluir navigate como dependencia

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
                                    type="button"
                                    onClick={handleGithubLogin} 
                                />
                            </div>
                        </form>
                    )}

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