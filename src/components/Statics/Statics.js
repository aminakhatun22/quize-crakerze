import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { useLoaderData } from 'react-router-dom';


const Statics = () => {
    const topic = useLoaderData().data;
    console.log(topic)

    return (
        <div className='ml-72 mt-12 p-5'>

            <BarChart width={730} height={250} data={topic}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Statics;