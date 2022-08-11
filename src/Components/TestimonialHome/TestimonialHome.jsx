import React from 'react';
import './TestimonialHome.css';
import SliderTestimonials from './SliderTestimonial/SliderTestimonial';

export default function TestimonialHome() {
  return (
    <div className="container testimonial__container">
      <div className="testimonial--left">
        <h5>Testimonials</h5>
        <h2>
          What Our <span>Customers</span> are saying
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          quaerat ad quisquam mollitia assumenda sequi tenetur, molestiae odio
        </p>
        <div>
          <SliderTestimonials />
        </div>
      </div>
      <div className="testimonial--right">
        <img src="./images/network.png" alt="" />
      </div>
    </div>
  );
}
