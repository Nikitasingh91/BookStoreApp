import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:2003/user/signup", userInfo).then((res) => {
            //  console.log(res.data);
            if (res.data) {
                toast.success("signup suceessfully")
                navigate("/")
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user))


        }).catch((err) => {
            if (err.response) {
                toast.error("Error:" + err.response.data.message)
            }
        })
    }


    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="border-[2px] shadow-md p-5 rounded-md relative w-fit">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Close (X) Button */}
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => navigate('/')}
                    >
                        ✕
                    </button>

                    <h3 className="font-bold text-lg">Signup</h3>

                    <div className='mt-4 space-y-2'>
                        <span>Name</span><br />
                        <input {...register("name", { required: true })} type='text' placeholder='Enter your name' className='w-80 px-3 border rounded-md outline-none py-2' />
                        <br /> {errors.name && <span className='text-sm text-red-500'>This field is required</span>}

                    </div>

                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br />
                        <input {...register("email", { required: true })} type='email' placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none py-2' />
                        <br /> {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                    </div>

                    <div className='mt-4 space-y-2'>
                        <span>Password</span><br />
                        <input {...register("password", { required: true })} type='password' placeholder='Enter your password' className='w-80 px-3 border rounded-md outline-none py-2' />
                        <br /> {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

                    </div>

                    <div className='flex justify-around mt-4 items-center'>
                        <button className='bg-pink-500 text-white px-3 rounded-md py-1 hover:bg-pink-700 duration-200'>Signup</button>
                        <p className='text-md'>Have an account? <button className='underline text-blue-500' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>{" "}<Login /></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
