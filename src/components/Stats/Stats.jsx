import React from 'react'

const Stats = () => {
  return (
    <div className="bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] mt-20">
      <div className="container mx-auto py-15 flex justify-between text-white">
        <div className="border-r border-white/60 pr-30 pl-40">
          <h2 className="text-4xl font-bold mb-3">50k+</h2>
          <p className="text-white/90 text-lg">Active Users</p>
        </div>
        <div className="border-r border-white/60  pr-30">
          <h2 className="text-4xl font-bold mb-3">200+</h2>
          <p className="text-white/90 text-lg">Premium Tools</p>
        </div>
        <div className="pl-0 pr-40">
          <h2 className="text-4xl font-bold mb-3">4.9</h2>
          <p className="text-white/90 text-lg">Rating</p>
        </div>
      </div>
    </div>
  );
}

export default Stats
