import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'

const SignUpPage = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({ resolver: yupResolver()
    })
    return (
        <div>SignUpPage</div>
    )
}

export default SignUpPage