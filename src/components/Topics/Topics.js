import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Topic from './Topic';

const Topics = () => {
    const topics = useLoaderData().data;
    // console.log(topics)


    return (
        <div className=' ml-36 grid grid-cols-2 gap-5 mr-36 p-12'>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)

            }
        </div>
    );
};

export default Topics;