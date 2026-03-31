import React from 'react'

const Cart = ({ data, total, setTotal, setCartData, cartData, cartCount, setCartCount }) => {
  
  // setTotal(data.price + total);
  // console.log(total);

  const removeBtn = (data) => {
    console.log('remove btn clicked', data);
    
    const filteredData = cartData.filter((selectedData) =>selectedData.id !== data.id)
    setCartData(filteredData)
    // setTotal(total-selectedData.price)
    setTotal(prev => prev - data.price)
    setCartCount(prev=>prev-1)

  }
  
  
  return (
    <div>
      <div className="bg-[#f2f2f2] p-4 rounded-lg flex justify-between mb-5">
        <div className="flex gap-3">
          <img
            className="bg-[#ffffff] h-10 w-10 p-2 rounded-full border border-[#f2f2f2]"
            src={data.icon}
            alt=""
          />
          <div>
            <h2 className="font-semibold text-md">{data.name}</h2>
            <p className="text-left text-black/60">${data.price}</p>
          </div>
        </div>
        <button
          onClick={() => removeBtn(data)}
          className="text-[#FF3980] font-semibold cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Cart
