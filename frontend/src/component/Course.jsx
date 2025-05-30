import React from 'react'
import Cards from './Cards'
//import list from "../../public/list.json"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Course = () => {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {

            try {
                const res = await axios.get("http://localhost:2003/book")
                console.log(res.data);
                setBook(res.data)

            }
            catch (error) {
                console.log("error", error);


            }
        }
        getBook()


    }, [])
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
                <div className='mt-28 item-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl '>We're delighed to have you <span className='text-pink-500'>Here! :)</span></h1>
                    <p className='mt-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived
                        not only five centuries.</p>
                    <Link to="/"><button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button></Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md: grid-cols-4'>
                    {

                        book.map((item) => {
                            return (
                                <Cards item={item} key={item.id} />

                            )
                        })

                    }

                </div>
            </div>
        </>
    )
}

export default Course