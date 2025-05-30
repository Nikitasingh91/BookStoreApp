import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:2003/user/login", userInfo).then((res) => {
            //  console.log(res.data);
            if (res.data) {
                toast.success("user login success")
                document.getElementById("my_modal_3").close()

                setTimeout(() => {
                    window.location.reload()

                    localStorage.setItem("Users", JSON.stringify(res.data.user))

                }, 1000)
            }


        }).catch((err) => {
            if (err.response) {
                toast.error("Error:" + err.response.data.message)
                setTimeout(() => { }, 2000)
            }
        })
    }


    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box ">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => { document.getElementById("my_modal_3").close() }}>✕</Link>
                        <h3 className="font-bold text-lg text-pink-500">Login</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span><br />
                            <input {...register("email", { required: true })} type='email' placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none py-2' />
                            <br /> {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span><br />
                            <input type='text' {...register("password", { required: true })} placeholder='Enter your password' className='w-80 px-3 border rounded-md outline-none py-2 text-black-500' />
                            <br />{errors.password && <span className='text-sm text-red-500'>This field is required</span>}

                        </div>
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white px-3 rounded-md py-1 hover:bg-pink-700 duration-200'>Login</button>
                            <p>Not registered? <span className='underline text-blue-500 cursor-pointer' ><Link to="/signup">Signup</Link></span></p>

                        </div>
                    </form>


                </div>
            </dialog>
        </div>
    )
}

export default Login