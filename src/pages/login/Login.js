import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ServerUrlContext } from '../..'
import { toast } from 'react-toastify'
const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const serverUrl = useContext(ServerUrlContext)
    const navigate = useNavigate()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const handleLogin = (data) => {
        fetch(`${serverUrl}/api/v1/admin/login-admin`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                const { token } = data
                sessionStorage.setItem('accessToken', token)
                if (!data?.success) {
                    toast.error('Something is wrong ')
                }
                navigate('/dashboard')
            })
    }

    return (
        <div className="flex h-[50vh] md:my-44 justify-center items-center ">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is required!',
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email!',
                                    },
                                })}
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === 'pattern' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        {/* password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <p
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute  right-5 cursor-pointer top-2"
                                >
                                    <FontAwesomeIcon
                                        icon={showPass ? faEye : faEyeSlash}
                                    />
                                </p>
                                <input
                                    {...register('password', {
                                        required: {
                                            value: true,
                                            message: 'Password is required!',
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters!',
                                        },
                                    })}
                                    type={showPass ? 'text' : 'password'}
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                            <label className="label">
                                {errors.password?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === 'minLength' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <input
                            className="btn w-full max-w-xs"
                            type="submit"
                            value="Login"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
