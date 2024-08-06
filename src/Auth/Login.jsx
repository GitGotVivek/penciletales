
import React, { useState } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";

const Login = ({ isOpen, onClose, children, from }) => {
    const initial = {
        name: "",
        email: "",
        password: ""
    };

    const [authCredential, setAuthCredential] = useState(initial);
    const [showPassword, setShowPassword] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [isForgot, setIsForgot] = useState(false)

    // Toggle Password Visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Toggling the Form
    const toggleForm = () => {
        setIsRegister(!isRegister);
        setAuthCredential(initial);
    };

    // Handle Change The Auth User Input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthCredential({ ...authCredential, [name]: value });
    };

    // Handle Submit
    const handleSubmit = (e, val) => {
        e.preventDefault();
        const { name, email, password } = authCredential;
        if (val === "register") {
            const data = {
                name: name,
                email: email,
                password: password
            };
            console.log("RegisterData", data);
        } else {
            const data = {
                email: email,
                password: password
            };
            console.log("RegisterData", data);
        }
    };

    return (
        <div className={` shadow-lg fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50`}>
            <div className={`bg-white ${isRegister && "h-[565px]"} h-[500px] rounded-lg overflow-hidden w-full max-w-lg p-2 relative`}>
                <button
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                    onClick={onClose}
                >
                    <FaXmark className='w-6 h-6' />
                </button>

                <div className="flex mt-6 justify-center min-h-screen">
                    <Card color="transparent" shadow={false} className="p-2 sm:p-8 max-w-sm w-full">
                        <Typography variant="h4" color="blue-gray" className="text-center">
                            {isRegister ? "Register" : "Log In"}
                        </Typography>

                        {isForgot ? (
                            <Typography color="gray" className="mt-1 font-normal text-center">
                                Forgot your password? No worries! Enter your secret question and new password below.
                            </Typography>
                        ) : (
                            <Typography color="gray" className="mt-1 font-normal text-center">
                                {isRegister ? "Create an account by entering your details below." : "Nice to meet you! Enter your details to login."}
                            </Typography>
                        )}
                        <form className="mt-3 mb-2 w-full" onSubmit={(e) => handleSubmit(e, isRegister ? "register" : "login")}>
                            <div className="flex flex-col gap-6">
                                {isRegister &&
                                    <>
                                        <Typography variant="h6" color="blue-gray" className="-mb-6">
                                            Your Name
                                        </Typography>
                                        <Input
                                            type="text"
                                            size="lg"
                                            placeholder="John Doe"
                                            name='name'
                                            value={authCredential?.name}
                                            onChange={handleChange}
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900 -mb-4"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />

                                        <Typography variant="h6" color="blue-gray" className="-mb-6">
                                            Enter Secret Question
                                        </Typography>
                                        <Input
                                            type="text"
                                            size="lg"
                                            placeholder="Enter Your Secret Question"
                                            name='name'
                                            value={authCredential?.name}
                                            onChange={handleChange}
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </>
                                }

                                {isForgot ?
                                    <>
                                        <Typography variant="h6" color="blue-gray" className="-mb-6">
                                            Enter Secret Question
                                        </Typography>
                                        <Input
                                            type="text"
                                            size="lg"
                                            placeholder="Enter Your Secret Question"
                                            name='name'
                                            value={authCredential?.name}
                                            onChange={handleChange}
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />

                                        <Typography variant="h6" color="blue-gray" className="-mb-6 -mt-4">
                                            New Password
                                        </Typography>
                                        <div className="relative">
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
                                                size="lg"
                                                name='password'
                                                value={authCredential?.password}
                                                onChange={handleChange}
                                                placeholder="********"
                                                className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-12"
                                                labelProps={{
                                                    className: "before:content-none after:content-none",
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                                            >
                                                {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                                            </button>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Typography variant="h6" color="blue-gray" className={`-mb-6 ${isRegister && "-mt-4"}`}>
                                            Your Email
                                        </Typography>
                                        <Input
                                            type="email"
                                            size="lg"
                                            name='email'
                                            value={authCredential?.email}
                                            onChange={handleChange}
                                            placeholder="name@mail.com"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />

                                        <Typography variant="h6" color="blue-gray" className="-mb-6 -mt-4">
                                            Password
                                        </Typography>
                                        <div className="relative">
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
                                                size="lg"
                                                name='password'
                                                value={authCredential?.password}
                                                onChange={handleChange}
                                                placeholder="********"
                                                className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-12"
                                                labelProps={{
                                                    className: "before:content-none after:content-none",
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                                            >
                                                {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                                            </button>
                                        </div>
                                    </>
                                }

                            </div>

                            {!isRegister && !isForgot &&
                                (
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex items-center font-normal mt-2"
                                        onClick={() => setIsForgot(!isForgot)}
                                    >
                                        <a
                                            href="#"
                                            className="font-medium transition-colors hover:text-gray-900"
                                        >
                                            &nbsp;Forgot Password
                                        </a>
                                    </Typography>
                                )
                            }

                            {isForgot &&
                                (<Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal mt-2"
                                >
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Forgot Secret Question?
                                    </a>
                                </Typography>
                                )}


                            <Button
                                type="submit"
                                className={`${isRegister ? "mt-4" : "mt-6"}`}
                                fullWidth
                                onClick={() => setIsForgot(false)}
                            >
                                {isForgot ? "Update Password" : (isRegister ? "Register" : "Login")}
                            </Button>
                            {!isForgot && <Typography color="gray" className={`${isRegister ? "mt-2 text-center font-normal" : "mt-4 text-center font-normal"}`}>
                                {isRegister ? (
                                    <>Already have an account? <a onClick={toggleForm} className="font-medium text-gray-900 cursor-pointer">Login now</a></>
                                ) : (
                                    <>Don't have an account? <a onClick={toggleForm} className="font-medium text-gray-900 cursor-pointer">Register now</a></>
                                )}
                            </Typography>}
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;
