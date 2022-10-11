import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statics = () => {

    const [data, setData] = useState([]);


    useEffect(async () => {
        const result = await fetch(
            'https://openapi.programming-hero.com/api/quiz',
        );

        setData(result.data);
    });

    return (
        <div>

            <LineChart width={500} height={400} data={setData}
            >
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statics;