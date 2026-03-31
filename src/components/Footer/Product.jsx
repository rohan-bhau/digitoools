import React from 'react'

const Product = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold ">Product</h3>
      <ul className="space-y-2 text-white/70 text-md w-fit">
        <li className="hover:text-orange-500">
          <a href="">Features</a>
        </li>
        <li className="hover:text-orange-500">
          <a href="">Pricing</a>
        </li>
        <li className="hover:text-orange-500">
          <a href="">Templates</a>
        </li>
        <li className="hover:text-orange-500">
          <a href="">Integrations</a>
        </li>
      </ul>
    </div>
  );
}

export default Product
