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






            <Topics></Topics>
        </div>
    );
};

export default Home;