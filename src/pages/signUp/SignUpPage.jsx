import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { singUpSchema } from "../../hooks/validationSchemas";
import { useAuth } from "../../hooks/useAuth";
import { USER_REGISTER, SIGNUP_PAGE } from "../../config";
import Input from "../../components/inputs/Input";
import MainButton from "../../components/buttons/mainButton/MainButton";
import githubIcon from "/assets/icons/github-mark.svg";
import usePost from "../../hooks/usePost";
import LoadingModal from "../../components/modals/loadingModal/LoadingModal";
import useGithubAuth from "../../hooks/useGithubAuth";
import "./signUpPage.scss";

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(singUpSchema),
    });
    const { data, loading, error, executePost } = usePost(USER_REGISTER);
    const { login } = useAuth();
    const onSubmit = (formData) => {
        executePost({
            name: formData.name,
            email: formData.email,
            password: formData.password,
        });
    };
    const { handleGithubLogin, githubLoading } = useGithubAuth(login, SIGNUP_PAGE);

    useEffect(() => {
        if (data && data.token) {
            login(data.token);
        }
    }, [data]);

    return (
        <section className="signup-body">
            <LoadingModal isOpen={loading || githubLoading} />
            <div className="form-page">
                <div className="form-container">
                    <form
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        className="form-content"
                    >
                        <img className="logo" src="/logo\Icon-Variant2.svg" />
                        <div className="form-content">
                            <Input
                                {...register("name")}
                                id="name"
                                border="border"
                                type="text"
                                placeholder="Nombre"
                            />
                            {errors.name && (
                                <p className="errors">{errors.name.message}</p>
                            )}
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
                            <Input
                                {...register("confirmPassword")}
                                id="confirmPassword"
                                type="password"
                                border="border"
                                placeholder="Repite la contraseña"
                            />
                            {errors.confirmPassword && (
                                <p className="errors">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>
                        <div className="buttons">
                            <MainButton
                                type="submit"
                                color="accent"
                                text="Registrarse"
                            />
                            <MainButton
                                color="secondary"
                                text="Registrarse con github"
                                iconVisibility="icon-visible"
                                iconButton={githubIcon}
                                label="githubIcon"
                                type="button"
                                onClick={handleGithubLogin}
                            />
                        </div>
                    </form>
                    {error && <p className="errors">Error: {error}</p>}
                    <div>
                        <p className="signup-span">¿Ya estás registrado?</p>
                        <span>
                            <p className="signup-text">Inicia sesión</p>
                            <Link to="/login" className="link">
                                aquí
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpPage;
