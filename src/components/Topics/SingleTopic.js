import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleTopic = () => {
    const topic = useLoaderData().data;
    console.log(topic)
    return (
        <div>
            this is sigle topic
        </div>
    );
};

export default SingleTopic;