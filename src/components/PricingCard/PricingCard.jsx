import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing ;
    console.log(pricing)

    return (
        <div className='flex flex-col border bg-cyan-900 rounded-2xl p-4'>
            {/* card hader */}
            <div>
                <h1 className='text-5xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>

            {/* card body */}
            <div className='flex-1 bg-cyan-500 p-4 rounded-2xl mt-10'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature
                        feature={feature} key={index}
                    ></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;