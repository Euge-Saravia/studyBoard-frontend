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

export const createGroupSchema = yup.object().shape({
    groupTitle: yup.string()
        .required('El nombre del grupo es obligatorio')
        .min(6, "El nombre del grupo debe tener al menos 6 caractéres"),
    boardTitle: yup.string().required('El título del board es obligatorio')
})

export const createPostItSchema = yup.object().shape({
    postItContent: yup.string().required('El contenido es obligatorio')
})

