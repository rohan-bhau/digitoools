 import React from 'react'
import FeaturesCard from './FeaturesCard'
import portfolio from '../../../src/assets/products/portfolio.png';

const ProductPlan = ({ product }) => {
    // console.log(product);
    const {name, tag, price, period, icon, tagType, description, features} = product;
    
    // console.log(productData);
    
  return (
    <div className="border text-left border-[#f2f2f2] space-y-4 rounded-xl w-[380px] mt-10 p-4 shadow mb-5 container mx-auto">
      <div className="flex justify-end">
        <button className="btn rounded-full">{tag}</button>
      </div>
      <div className="w-15 h-15 bg-[#f2f2f2] rounded-full flex justify-center items-center">
        <img src={icon} alt="" />
      </div>
      <h2 className="text-xl text-black/90 font-bold">{name}</h2>
      <p className="text-lg text-black/60">{description}</p>
      <p className="text-xl font-bold">
        {price}
        <span className="text-lg font-normal text-black/60">/{period}</span>
      </p>
      {features.map((feature, idx) => (
        <FeaturesCard key={idx} feature={feature}></FeaturesCard>
      ))}
      <button className="btn btn-primary w-full rounded-full">Buy Now</button>
    </div>
  );
};

export default ProductPlan
