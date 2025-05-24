import React from 'react'
import imge from "../../public/Banner.png"
const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex my-10 flex-col md:flex-row'>
                <div className=' md:order-2 order-2  md:w-1/2 w-full mt:12  md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello, welcomes here to learn something<span className='text-pink-500'>new everyday!!!</span> </h1>
                        <p className='text-xl'>Lorem, ipsum dolar sit amet consectetur adipising elite. Dolar, ettotam. Tempora amet atque expedita,quae corrupti totam sed pariatur corporis at veniam est volupta animi!</p>
                        <label className="flex items-center gap-2 w-full border px-3 py-2 rounded">
                            <svg
                                className="h-5 w-5 opacity-50"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input
                                type="email"
                                placeholder="mail@site.com"
                                required
                                className="flex-1 w-full outline-none bg-transparent"
                            />
                        </label>


                    </div>
                    <button className="btn btn-secondary mt-6">Secondary</button>
                </div>
                <div className='order-1 w-full mt-20 md:w-1/2 w-full'>
                    <img src={imge} className='md:w-[550px] md:h-[460px] md:ml-50' />
                </div>
            </div>
        </>
    )
}

export default Banner