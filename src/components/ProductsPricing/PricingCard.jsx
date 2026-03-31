import React from 'react'
import FeatureCard from './FeatureCard';

const PricingCard = ({ data,}) => {
  // console.log(data.most_popular_tag);

  return (
    <div className="bg-[#f2f2f2] p-6 mb-6 rounded-lg shadow space-y-6 relative flex flex-col justify-between">
      <h2
        className={`absolute -top-3 left-[40%] bg-[#FEF3C6] text-[#BB4D00] font-semibold px-3 py-2 rounded-full ${data.most_popular_tag === false ? "hidden" : ""}`}
      >
        Most Popular
      </h2>
      {/* {{ data.most_popular_tag } ? <h2 className="absolute -top-3 left-45 bg-amber-300 px-2 py-2 rounded-full">
        popilar tag
      </h2>:"" } */}

      <div>
        <h2 className="text-2xl font-semibold mb-2">{data.plan_name}</h2>
        <p className="text-black/60">{data.tagline}</p>
      </div>
      <div className="flex items-center">
        <h2 className="text-2xl font-bold">{data.price}</h2>
        <span className="text-lg text-black/60">{data.period}</span>
      </div>
      <div>
        {data.features.map((feature, idx) => (
          <FeatureCard key={idx} feature={feature}></FeatureCard>
        ))}
      </div>
      <button className="btn btn-primary w-full rounded-full">
        {data.call_to_action}
      </button>
    </div>
  );
};

export default PricingCard
