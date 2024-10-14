import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../hooks/validationSchemas";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { USER_LOGIN, LOGIN_PAGE } from "../../config";
import Input from "../../components/inputs/Input";
import MainButton from "../../components/buttons/mainButton/MainButton";
import githubIcon from "/assets/icons/github-mark.svg";
import usePost from "../../hooks/usePost";
import LoadingModal from "../../components/modals/loadingModal/LoadingModal";
import useGithubAuth from "../../hooks/useGithubAuth";
import "./loginPage.scss";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });
    const { login } = useAuth();
    const {
        data,
        error,
        loading: postLoading,
        executePost,
    } = usePost(USER_LOGIN);
    const onSubmit = (formData) => {
        executePost(formData);
    };
    const { handleGithubLogin, githubLoading } = useGithubAuth(login, LOGIN_PAGE);

    useEffect(() => {
        if (data) {
            login(data.token);
        }
    }, [data]);

    return (
        <section className="login-body">
            <div className="form-page">
                <div className="form-container">
                    <LoadingModal isOpen={postLoading || githubLoading} />
                    <form
                        noValidate
                        className="form-content"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <img className="logo" src="/logo\Icon-Variant2.svg" />
                        <div className="form-content">
                            <Input
                                {...register("email")}
                                id="email"
                                border="border"
                                type="text"
                                placeholder="Correo electrónico"
                            />
                            {errors.email && (
                                <p className="errors">{errors.email.message}</p>
                            )}
                            <Input
                                {...register("password")}
                                id="password"
                                type="password"
                                border="border"
                                placeholder="Contraseña"
                            />
                            {errors.password && (
                                <p className="errors">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        <div className="buttons">
                            <MainButton
                                color="accent"
                                text="Iniciar sesión"
                                type="submit"
                            />
                            <MainButton
                                color="secondary"
                                text="Iniciar sesión con github"
                                iconVisibility="icon-visible"
                                iconButton={githubIcon}
                                label="githubIcon"
                                type="button"
                                onClick={handleGithubLogin}
                            />
                        </div>
                        {error && (
                            <p className="errors">
                                Email o contraseña incorrectos
                            </p>
                        )}
                    </form>
                    <div>
                        <p>¿No tienes cuenta aún?</p>
                        <span>
                            <p>Regístrate</p>
                            <Link to="/signup">aquí</Link>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
