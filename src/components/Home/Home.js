import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
// import freePik from "./src/assets/Quiz.jpg";
import freePik from '../../assets/Quiz.jpg'

const Home = () => {
    const topics = useLoaderData();
    console.log(topics)
    return (
        <div>

            <section className='mb-24'>
                <div className="bg-gray-100">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
                            Welcome To Quizzically Challanged
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                            "Knowledge becomes power only when we put it into some use".....so let's honour our knowledge by answering some simple  questions......... "Knowledge has a beginning but no end".......so let's keep ourselves going.
                        </p>

                    </div>
                </div>
                <img
                    src={freePik}
                    alt=""
                    className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
                />


            </section>




            <section className=' ml-36 grid grid-cols-2 gap-5 mr-36 p-12'>
                <div className='bg-red-200'>
                    <img src={topics.data[0].logo} alt="" ></img>

                    <div className='flex gap-5 mt-3 p-3'>
                        <div>
                            <p className='ml-2'>{topics.data[0].name}</p>

                        </div>
                        <div>
                            <p>Total question:{topics.data[0].total}</p>
                        </div>
                        <div>
                            <button className='bg-blue-500 rounded-xl p-2 mb-2'>Start Quiz</button>
                        </div>
                    </div>


                </div>



                <div className='bg-yellow-200'>
                    <img src={topics.data[1].logo} alt="" ></img>
                    <div className='flex gap-5 mt-3 p-3'>
                        <div>
                            <p className='ml-2'> Name:{topics.data[1].name}</p>
                        </div>
                        <div>
                            <p>Total question:{topics.data[1].total}</p>
                        </div>
                        <div>
                            <button className='bg-blue-500 rounded-xl p-2 mb-2'>Start Quiz</button>
                        </div>
                    </div>



                </div>


                <div className='bg-yellow-200'>
                    <img src={topics.data[2].logo} alt="" ></img>
                    <div className='flex gap-5 mt-3 p-3'>
                        <div>
                            <p>{topics.data[2].name}</p>
                        </div>
                        <div>
                            <p>Total question:{topics.data[2].total}</p>
                        </div>
                        <div>
                            <button className='bg-blue-500 rounded-xl p-2 mb-2'>Start Quiz</button>
                        </div>
                    </div>



                </div>


                <div className='bg-blue-200'>
                    <img src={topics.data[3].logo} alt="" ></img>

                    <div className='flex gap-5 mt-3 p-3'>
                        <div>
                            <p>{topics.data[3].name}</p>
                        </div>
                        <div>
                            <p>Total question:{topics.data[3].total}</p>
                        </div>
                        <div>
                            <button className='bg-blue-500 rounded-xl p-2 mb-2'>Start Quiz</button>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Home;