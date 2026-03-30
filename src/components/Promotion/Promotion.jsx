import React from 'react'
import user from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocket from "../../assets/rocket.png";
import Card from '../ProductPlans/Card';

const Promotion = () => {
    const promotionData = [
      {
        id: 1,
        icon: user ,
        title: "Create Account",
        description:
          "Sign up for free in seconds. No credit card required to get started.",
      },
      {
        id: 2,
        icon:  packageImg ,
        title: "Choose Products",
        description:
          "Browse our catalog and select the tools that fit your needs.",
      },
      {
        id: 3,
        icon: rocket ,
        title: "Start Creating",
        description: "Download and start using your premium tools immediately.",
      },
    ];
    console.log(promotionData);
    
  return (
    <div className="bg-[#f9fafc]">
      <div className='container mx-auto py-10'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-black/80 mb-4'>Get Started In 3 Steps</h2>
          <p className='text-md text-black/60 mb-10'>Start using premium digital tools in minutes, not hours.</p>
        </div>
              <div className='grid grid-cols-3 gap-5'>
                  
                  {promotionData.map(data => {
                      return (
                  <Card key={data.id} data={data}></Card>
              )
              
          })}
              </div>
              {/* <Card></Card> */}
      </div>
    </div>
  );
}

export default Promotion
