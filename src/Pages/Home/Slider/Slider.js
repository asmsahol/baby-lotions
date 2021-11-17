/** @format */

import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div className='slider'>
      <Carousel variant='dark'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.postimg.cc/qR0cQs6j/slider-1.jpg'
            alt='First slide'
          />
          <Carousel.Caption className='text-white bg-secondary bg-opacity-50 rounded'>
            <h5>"Organic Baby Lotion</h5>
            <p>
              "Any brand can use the term ‘natural’ if they feel there is one
              ingredient in their recipe that is naturally derived,” Sarkar
              says.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.postimg.cc/63j7Rnr7/slider-2.jpg'
            alt='Second slide'
          />
          <Carousel.Caption className='text-white  bg-secondary bg-opacity-50 rounded'>
            <h5>Johnson's baby milk lotion</h5>
            <p>
              Johnson's baby milk lotion contains a rich combination of milk
              proteins plus essential vitamins to help complete skin
              nourishment. By nourishing skin, it leaves ...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.postimg.cc/TYvpg1kS/slider-3.jpg'
            alt='Third slide'
          />
          <Carousel.Caption className='text-white  bg-secondary bg-opacity-50 rounded'>
            <h5>Best Natural Baby Lotions</h5>
            <p>
              In addition, children less than 5 years old have more permeable
              skin, meaning that things can pass more easily both into and out
              of it, which can lead to more skin reactions than adult skin,” she
              says.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
