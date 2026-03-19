// import React from 'react';
import React, {use} from 'react' ;
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use (pricingPromise);
    // console.log(pricingData);

    return (
        <div>
            <h2 className='text-5xl'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* {
                    pricingData.map(pricing => <PricingCard pricing={pricing}
                        key={pricing.id}
                    ></PricingCard>)
                } */}

                {
                    pricingData.map(pricing => <DaisyPricing
                        key={pricing.id}
                        pricing={pricing}
                    ></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;