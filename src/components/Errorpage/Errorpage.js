import React from 'react';
import Header from '../Header/Header';

const Errorpage = () => {
    return (
        <div>
            <>
                <Header />
                <div className='flex flex-col min-h-[700px] justify-center items-center'>
                    <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
                </div>
            </>
        </div>
    );
};

export default Errorpage;