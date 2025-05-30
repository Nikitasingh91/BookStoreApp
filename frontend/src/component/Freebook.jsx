import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Freebook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            const res = await axios.get("http://localhost:2003/book");
            console.log(res.data.filter((data) => data.category === "Free"));
            setBook(res.data.filter((data) => data.category === "Free"))


        }
        getBook()

    }, [])

    //  const filterData = list.filter((data) => data.category === "Free")

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
                    <p className=''>Lorem, ipsum dolar sit amet consectetur adipising elite. Dolar, ettotam. Tempora amet atque expedita,quae corrupti totam sed pariatur corporis at veniam est volupta animi!</p>

                </div>
                <div>
                    <Slider {...settings}>
                        {book.map((item) => {
                            return (
                                <Cards key={item.id} item={item} />
                            )
                        })}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Freebook