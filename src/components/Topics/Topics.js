import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Topic from './Topic';

const Topics = () => {
    const topics = useLoaderData().data;
    // console.log(topics)


    return (
        <div className='  grid lg:grid-cols-2  sm:grid-cols-1  gap-5 lg:mr-36 lg:ml-36   p-12'>
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