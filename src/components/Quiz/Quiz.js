import React from 'react';
// import { Label } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid';


const Quiz = ({ questions }) => {
    const correct = () => toast.success('Your Answer is correct');
    const wrong = () => toast.error("Your Answer is Wrong");
    const ans = () => toast.info(`YOur Answer is: ${correctAnswer}`);
    const { options, question, correctAnswer } = questions;
    const ShowAnswer = () => {
        ans()
    }
    const getAnswer = (data) => {
        if (data === correctAnswer) {
            correct()
        }
        else { wrong() }
    }
    return (



        <div className='lg:w-9/12 m-auto border-4 my-5 shadow-xl p-8 bg-blue-200'>

            <div>
                <EyeIcon onClick={ShowAnswer} className=" h-6 w-6 text-blue-700" />
                <h1 className='text-2xl mb-8'><strong>Q. {question}</strong></h1>
            </div>

            <div className='lg:grid grid-rows-2 grid-flow-col gap-4'>
                {options.map(option =>
                    <label htmlFor="">
                        <input onClick={() => getAnswer(option)} type="radio" value="option1" />
                        {option}

                    </label>
                )}
            </div>

            <ToastContainer />

        </div>
    );
};

export default Quiz;