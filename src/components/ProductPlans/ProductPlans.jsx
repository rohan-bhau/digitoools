import { use } from 'react';
import ProductPlan from './ProductPlan'

const ProductPlans = ({ productPromise }) => {
    const productData=use(productPromise)
    // console.log(productData);
    
  return (
    <div className="mt-30 text-center">
      <h2 className="text-4xl font-bold mb-2 text-black/80">
        Premium Digital Tools
      </h2>
      <p className="text-lg text-black/60 mb-4">
        Choose from our curated collection of premium digital products designed{" "}
        <br /> to boost your productivity and creativity.
      </p>
      <div className="flex justify-center">
        <button className="btn rounded-full rounded-r-none">Products</button>
        <button className="btn rounded-full rounded-l-none">Cart()</button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {productData.map((product,idx) => (
            <ProductPlan
                key={idx}
                product={product}
            ></ProductPlan>
        ))}
      </div>
    </div>
  );
};

export default ProductPlans
