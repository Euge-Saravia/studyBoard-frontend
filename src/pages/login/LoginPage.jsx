import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../hooks/validationSchemas";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Input from "../../components/inputs/Input";
import MainButton from "../../components/buttons/mainButton/MainButton";
import githubIcon from "/assets/icons/github-mark.svg";
import usePost from "../../hooks/usePost";
import LoadingModal from "../../components/modals/loadingModal/LoadingModal";
import "./loginPage.scss";
import { useCookies } from "react-cookie";
import { USER_LOGIN } from "../../config";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { login } = useAuth();
  const [githubLoading, setGithubLoading] = useState(false);
  const navigate = useNavigate();

  const { data, error, loading: postLoading, executePost } = usePost(USER_LOGIN);

  const [cookies, setCookie] = useCookies(["authToken"]);

  const onSubmit = (formData) => {
    executePost(formData);
  };

  useEffect(() => {
    if (data) {
      login(data.token);
    }
  }, [data]);

  const handleGithubLogin = () => {
    const clientID = "Ov23li8Mgk1hbihsVQKk";
    const redirectURI = "http://localhost:5173/login/";
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      setGithubLoading(true);
      const finalUrl = "http://localhost:4001/auth/github/callback?code=" + code;
      fetch(finalUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((userData) => {
          setGithubLoading(false);
          if (userData.token) {
            const date = new Date();
            date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
            let expires = date.toUTCString();

            setCookie("authToken", userData.token, {
              path: "/",
              expires: new Date(expires),
              secure: true,
              sameSite: "strict",
            });

            navigate("/home");
          } else {
            console.error("No se recibió un token válido.");
          }
        })
        .catch((error) => {
          setGithubLoading(false);
          console.error("Error en la autenticación con GitHub:", error);
        });
    }
  }, [navigate, setCookie]);

  return (
    <section className="login-body">
      <div className="form-page">
        <div className="form-container">
          <LoadingModal isOpen={postLoading || githubLoading} />
          <form noValidate className="form-content" onSubmit={handleSubmit(onSubmit)}>
            <img className="logo" src="/logo\Icon-Variant2.svg" />
            <div className="form-content">
              <Input {...register("email")} id="email" border="border" type="text" placeholder="Correo electrónico" />
              {errors.email && <p className="errors">{errors.email.message}</p>}
              <Input {...register("password")} id="password" type="password" border="border" placeholder="Contraseña" />
              {errors.password && <p className="errors">{errors.password.message}</p>}
            </div>
            <div className="buttons">
              <MainButton color="accent" text="Iniciar sesión" type="submit" />
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
            {error && <p className="errors">Email o contraseña incorrectos</p>}
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
