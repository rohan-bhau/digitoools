import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Stats from "./components/Stats/Stats";
import ProductPlans from "./components/ProductPlans/ProductPlans";
import axios from "axios";
import Promotion from "./components/Promotion/Promotion";
import ProductPricing from "./components/ProductsPricing/ProductPricing";
import WorkFlow from "./components/Workflow/WorkFlow";
import Footer from "./components/Footer/Footer";

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const fetchPricing = async () => {
  const res = await fetch("/pricingData.json");
  return res.json();
};

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartData, setCartData] = useState([])
  const productPromise = fetchProduct();
  const pricingPromise = fetchPricing();
  // console.log(pricingPromise);

  return (
    <div>
      <Navbar cartCount={cartCount} setCartCount={setCartCount}></Navbar>
      <Banner></Banner>
      <Stats></Stats>

      <Suspense
        fallback={
          <span className="loading loading-spinner text-success"></span>
        }
      >
        <ProductPlans
          cartCount={cartCount}
          setCartCount={setCartCount}
          cartData={cartData}
          setCartData={setCartData}
          productPromise={productPromise}
        ></ProductPlans>
      </Suspense>

      <Promotion></Promotion>

      <Suspense
        fallback={
          <span className="loading loading-spinner text-success"></span>
        }
      >
        <ProductPricing pricingPromise={pricingPromise}></ProductPricing>
      </Suspense>

      <WorkFlow></WorkFlow>

      <Footer></Footer>
    </div>
  );
};

export default App;
