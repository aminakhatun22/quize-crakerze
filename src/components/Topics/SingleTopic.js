import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const SingleTopic = () => {
    const topic = useLoaderData().data;
    const quiz = topic.questions;



    return (
        <div>
            {
                quiz.map(questions => <Quiz key={questions.id}
                    id={questions.id}
                    questions={questions}></Quiz>)
            }
        </div>
    );
};

export default SingleTopic;