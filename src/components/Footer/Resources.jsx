import React from 'react'

const Resources = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Resources</h3>
      <ul className="text-md text-white/70 space-y-2 w-fit">
        <li className="hover:text-orange-500">
          <a href="">Documentation</a>
        </li>
        <li className="hover:text-orange-500">
          <a href="">Help Center</a>
        </li>
        <li className="hover:text-orange-500">
          <a href="">Community</a>
        </li>
        <li className="hover:text-orange-500">
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Resources
