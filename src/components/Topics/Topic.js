import React from 'react';
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
    return (
        <div className='bg-red-200 '>
            <img src={topic.logo} alt="" ></img>

            <div className='flex gap-5 mt-3 p-3'>
                <div>
                    <p className='ml-2'>{topic.name}</p>

                </div>
                <div>
                    <p>Total question: {topic.total}</p>
                </div>
                <div>


                    <Link to={`/topic/${topic.id}`}>
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
    );
};

export default Topic;