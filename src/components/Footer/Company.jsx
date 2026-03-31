import React from 'react'

const Company = () => {
  return (
    <div>
      <h3 className='text-lg font-semibold mb-4'>Company</h3>
      <ul className='text-md text-white/70 w-fit space-y-2'>
        <li className="hover:text-orange-500">
          <a href="">About</a>
        </li>
        <li className="hover:text-orange-500">
          <a href="">Blog</a>
        </li>
        <li className="hover:text-orange-500">
          <a href="">careers</a>
        </li>
        <li className="hover:text-orange-500">
          <a href="">Press</a>
        </li>
      </ul>
    </div>
  );
}

export default Company
