import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Course from '../component/Course'
import list from "../../public/list.json"
console.log("list", list);

const Courses = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <Course />

            </div>
            <Footer />
        </>
    )
}

export default Courses