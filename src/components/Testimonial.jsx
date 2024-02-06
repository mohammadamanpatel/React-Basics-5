import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
function Testimonial(props) {
    const reviews = props.reviews;
    console.log("data of reviews is ",reviews);
    const [index, setIndex] = useState(0);
    function leftShiftHandler() {
        if (index-1 >= 0) {
            setIndex(index-1);
        }
        else {
            setIndex(reviews.length-1);
        }
    }
    function rightShiftHandler() {
        if (index+1 <= reviews.length-1) {
            setIndex(index+1)
        }
        else {
            setIndex(0)
        }
    }
    function surprizeHandler(){
        let randomIndex = Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex)
    }
    console.log(reviews[index]);
    return (
        <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card review={reviews[index]} />
            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
                <button
                    className="cursor-pointer hover:text-violet-500"
                    onClick={leftShiftHandler}
                >
                    <FiChevronLeft />
                </button>
                <button
                    className="cursor-pointer hover:text-violet-500"
                    onClick={rightShiftHandler}
                >
                    <FiChevronRight />
                </button>
            </div>

            <div className="mt-6">
                <button
                    className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
                    onClick={surprizeHandler}
                >
                    Surprice Me
                </button>
            </div>
        </div>
    )
}
export default Testimonial;