import React from 'react';
import { Link, useLoaderData } from "react-router-dom";


import freePik from '../../assets/Quiz.jpg'

import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData();



    return (
        <div>

            <section className='mb-24'>
                <div className="">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-blue-800">
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




            {/* <section className=' ml-36 grid grid-cols-2 gap-5 mr-36 p-12'>
                <div className='bg-red-200'>
                    <img src={topics.data[0].logo} alt="" ></img>

                    <div className='flex gap-5 mt-3 p-3'>
                        <div>
                            <p className='ml-2'>{topics.data[0].name}</p>

                        </div>
                        <div>
                            <p>Total question: {topics.data[0].total}</p>
                        </div>
                        <div>


                            <Link to="/topics">
                                <button
                                    type="button"
                                    className="px-8 py-3 mb-16 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
                                >
                                    Start Quiz
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>



                <div className='bg-yellow-200'>
                    <img src={topics.data[1].logo} alt="" ></img>
                    <div className='flex gap-5 mt-3 p-3'>
                        <div>
                            <p className='ml-2'> {topics.data[1].name}</p>
                        </div>
                        <div>
                            <p>Total question: {topics.data[1].total}</p>
                        </div>
                        <div>


                            <Link to="/topics">
                                <button
                                    type="button"
                                    className="px-8 py-3 mb-16 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
                                >
                                    Start Quiz
                                </button>
                            </Link>


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
                            <p>Total question: {topics.data[2].total}</p>
                        </div>
                        <div>


                            <Link to="/topics">
                                <button
                                    type="button"
                                    className="px-8 py-3 mb-16 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
                                >
                                    Start Quiz
                                </button>
                            </Link>
                        </div>
                    </div>



                </div>


                <div className='bg-blue-500'>
                    <img src={topics.data[3].logo} alt="" ></img>

                    <div className='flex gap-5 mt-3 p-3'>
                        <div>
                            <p>{topics.data[3].name}</p>
                        </div>
                        <div>
                            <p>Total question: {topics.data[3].total}</p>
                        </div>
                        <div>


                            <Link to="/topics">
                                <button
                                    type="button"
                                    className="px-8 py-3 mb-16 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
                                >
                                    Start Quiz
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>
            </section> */}
            {/* {
                topics.map(topic => <Topics key={topic.id}
                    topic={topic}></Topics>)
            } */}

            <Topics></Topics>
        </div>
    );
};

export default Home;