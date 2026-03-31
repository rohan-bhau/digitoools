import React, { use } from 'react'
import PricingCard from './PricingCard';

const ProductPricing = ({ pricingPromise}) => {
  // console.log(pricingPromise);
  const pricingData = use(pricingPromise);
  // console.log(pricingData);

  return (
    <div>
      <div className="container mx-auto p-20">
        <h2 className="text-center text-2xl font-bold text-black/70">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-md text-black/60 mb-10">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
        {pricingData.map((data, idx) => (
          <PricingCard
            key={idx}
            data={data}
          ></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default ProductPricing
