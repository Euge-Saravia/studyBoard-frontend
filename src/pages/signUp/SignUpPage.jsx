import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { singUpSchema } from "../../hooks/validationSchemas";
import "./signUpPage.scss";
import "../../components/buttons/mainButton/mainButton.scss";
import Input from "../../components/inputs/Input";
import MainButton from "../../components/buttons/mainButton/MainButton";
import githubIcon from "/assets/icons/github-mark.svg";
import { Link } from "react-router-dom";
import usePost from "../../hooks/usePost";
import { useAuth } from "../../hooks/useAuth";
import { USER_REGISTER } from "../../config";

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
    executePost({ name: formData.name, email: formData.email, password: formData.password });
  };

  useEffect(() => {
    if (data && data.token) {
      login(data.token);
    }
  }, [data]);

  return (
    <section className="signup-body">
      <div className="form-page">
        <div className="form-container">
          <form noValidate onSubmit={handleSubmit(onSubmit)} className="form-content">
            <img className="logo" src="/logo\Icon-Variant2.svg" />
            <div className="form-content">
              <Input {...register("name")} id="name" border="border" type="text" placeholder="Nombre" />
              {errors.name && <p className="errors">{errors.name.message}</p>}
              <Input {...register("email")} id="email" border="border" type="text" placeholder="Correo electrónico" />
              {errors.email && <p className="errors">{errors.email.message}</p>}
              <Input {...register("password")} id="password" type="password" border="border" placeholder="Contraseña" />
              {errors.password && <p className="errors">{errors.password.message}</p>}
              <Input
                {...register("confirmPassword")}
                id="confirmPassword"
                type="password"
                border="border"
                placeholder="Repite la contraseña"
              />
              {errors.confirmPassword && <p className="errors">{errors.confirmPassword.message}</p>}
            </div>
            <div className="buttons">
              <MainButton type="submit" color="accent" text="Registrarse" />
              <MainButton
                color="secondary"
                text="Registrarse con github"
                iconVisibility="icon-visible"
                iconButton={githubIcon}
                label="githubIcon"
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
