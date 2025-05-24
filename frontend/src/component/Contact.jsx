import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useForm } from "react-hook-form"
const Contact = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <Navbar />
            <div className='min-h-screen container mx-auto md:px-20 px-4 flex h-screen items-center justify-center'>
                <div className="">
                    <div id="my_modal_3" >
                        <div className="">
                            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                                <h3 className="font-bold text-lg">Contact Us</h3>
                                <div className='mt-4 space-y-2'>
                                    <span>Name</span><br />
                                    <input {...register("name", { required: true })} type='name' placeholder='Enter your email' className='w-[500px] px-3 border rounded-md outline-none py-2' />
                                    <br /> {errors.name && <span className='text-sm text-red-500'>This field is required</span>}

                                </div>
                                <div className='mt-4 space-y-2'>
                                    <span>Email</span><br />
                                    <input type='text' {...register("email", { required: true })} placeholder='Enter your password' className='w-[500px] px-3 border rounded-md outline-none py-2' />
                                    <br />{errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                                </div>
                                <div className='mt-4 space-y-2'>
                                    <span>Message</span><br />
                                    <textarea {...register("message", { required: true })} className="textarea w-[500px]" placeholder="Bio" ></textarea>
                                    <br />{errors.message && <span className='text-sm text-red-500'>This field is required</span>}

                                </div>

                                <div className='flex  mt-4'>
                                    <button className='bg-pink-500 text-white px-3 rounded-md py-1 hover:bg-pink-700 duration-200'>Submit</button>

                                </div>
                            </form>


                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact