import React from 'react';

const PricingOption = (props) => {
    const {name, price,ram, Storage, support} = props.option;
    return (
        <div className='bg-white p-2 rounded-lg'>
            <h2 className='bg-blue-300 p-4 font-bold text-xl rounded-full'>{name}</h2>
            <p className='pt-8'>
                <span className='font-bold text-4xl'>${price}</span>
                <span className='font-bold text-xl text-gray-500'>/mo</span>
            </p>
            <p className='font-bold mt-3'>Services Banefit</p>
            <p className='pb-5'>
            <p className='text-gray-500 pt-1'>{ram}</p>
            <p className='text-gray-500 pt-1'>{Storage}</p>
            <p className='text-gray-500 pt-1'>{support}</p>
            </p>
            <button className='bg-blue-600 w-full py-2  rounded-3xl text-xl text-white'>Buy Plan</button>
        </div>
    );
};

export default PricingOption;