import React from 'react';
import Image from '../Image/ocpc_industry_wholesaledistribution_482284276-1024x653.jpg'
import './Notfound.css'
export default function Notfound() {
  return (
    <>
      <h1>hello world</h1>

      <div className='container w-75 my-5 rounded-4 bg-primary'>
      <div className='  shadow rounded-4 position-relative'>
        <img id='img1'
          src={Image} 
          alt="Industry" style={{height: '400px', opacity: 0.50}}
          className="img-fluid w-100 rounded-4 "  // Bootstrap class to make the image responsive
        />
        
        <div className="position-absolute mb-4 start-0 top-50 translate-middle-y text-white p-5">
          <h2 id='h2'>Fast, Reliable,and<br/> Hassle-free <span style={{ color: 'orange' }}>Shipping</span></h2>
          <p id='p1' >Start your shipment today with ABS Logistics.We make it simple to <br/> 
          move your goods anywhere in the world - efficiently and securely.</p>
          <button className='button-5'>Ship Now</button>
          </div>
      
      </div>
    </div>

      
    </>
  );
}
