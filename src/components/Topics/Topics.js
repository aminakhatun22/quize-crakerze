import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const { id, name } = topic;
    const topic = useLoaderData();
    console.log(topic);

    return (
        <div>
            <h1>Amina</h1>
        </div>
    );
};

export default Topics;