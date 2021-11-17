/** @format */

import React, { useEffect, useState } from "react";
import "./Home.css";
import Products from "../Products/Products";
import Slider from "./Slider/Slider";
import BabyCare from "./BabyCare/BabyCare";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  // Load Products
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);

  // Load Baby Care
  const [babyCare, setBabyCare] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/baby_care")
      .then(res => res.json())
      .then(data => setBabyCare(data));
  }, []);

  // Load Reviews
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <h2 className='mt-5'>Most Popular Lotions</h2>
      <div className='products'>
        {products.slice(0, 4).map(product => (
          <Products product={product} key={product._id}></Products>
        ))}
      </div>
      <h2 className='text-center my-2'>Useful Baby Care Tips</h2>
      <div className='baby_care'>
        {babyCare.map(b_care => (
          <BabyCare b_care={b_care} key={b_care._id}></BabyCare>
        ))}
      </div>
      <h2 className='text-center my-5'>Customer Reviews</h2>
      <div>
        {reviews.map(review => (
          <Reviews review={review} key={review._id}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default Home;
