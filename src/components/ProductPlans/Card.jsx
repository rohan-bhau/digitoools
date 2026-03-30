import React from "react";

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="bg-[#f1f1f1] px-5 pt-5 rounded-lg">
      <div className=" flex justify-end  right">
        <button className=" bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full ">
          {data.id}
        </button>
      </div>
      <div className="flex justify-center items-center h-25 w-25 bg-[#b875eb]/20 rounded-full mx-auto mb-4">
        <img
          src={data.icon}
          alt=""
          className="  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
        />
      </div>
      <div className="text-center mb-20">
        <h2 className="text-xl font-bold mb-3">{data.title}</h2>
        <p className="text-md text-black/70">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
