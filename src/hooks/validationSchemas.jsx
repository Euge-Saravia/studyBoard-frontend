import * as yup from 'yup'

export const singUpSchema = yup.object().shape({
    name: yup.string().required("Este campo es obligatorio"),
    email: yup.string().email("Formato no válido").required("Este campo es obligatorio"),
    password: yup
        .string()
        .required("Este campo es obligatorio")
        .min(8, "La contraseña debe tener al menos 8 caractéres")
        .max(20, "La contraseña debe tener máximo 20 caractéres")
        .matches(/[A-Z]/, "La contraseña debe tener al menos una mayúscula")
        .matches(/[a-z]/, "La contraseña debe tener al menos una minúscula"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "La contraseña debe coincidir")
})

export const loginSchema = yup.object().shape({
    email: yup.string().email("Formato no válido").required("Este campo es obligatorio"),
    password: yup
        .string()
        .required("Este campo es obligatorio")
        .min(8, "La contraseña debe tener al menos 8 caractéres")
        .max(20, "La contraseña debe tener máximo 20 caractéres")
        .matches(/[A-Z]/, "La contraseña debe tener al menos una mayúscula")
        .matches(/[a-z]/, "La contraseña debe tener al menos una minúscula"),
})

