import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {id: 1, price: 0, name: 'Free', ram: '1GB', Storage: '500GB', support: 'Lifetime'},
        {id: 2, price: 80, name: 'Regular', ram: '4GB', Storage: '1TB', support: 'Lifetime'},
        {id: 3, price: 150, name: 'Premium', ram: '16GB', Storage: '2TB', support: 'Lifetime'},
    ]
    return (
        <div className='bg-blue-300 p-8'>
            <div>
                <h2 className='text-4xl text-gray-700  py-4 rounded-lg'> <span className='border-b-4 border-gray-700 rounded-lg'>Our Services</span></h2>

            </div>
            
            <div className='grid md:grid-cols-3 gap-4 mt-8'>
                {
                    pricingOption.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
                
            </div>
            
        </div>
    );
};

export default Pricing;