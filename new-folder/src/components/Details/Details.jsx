/* eslint-disable no-whitespace-before-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Details() {
  const [productCart, setDetails] = useState(null);
  let params = useParams();
  let productId = params.idd;

  async function getProducts() {
    try {
      let { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setDetails(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='container my-5' style={{ maxWidth: '1080px', padding: '50px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', borderRadius: '0' }}>
      <div className='row justify-content-center'>
        <div className='col-md-12'>
          {productCart ? (
            <div className='card shadow-sm'>
              <div className='row g-0'>
                <div className='col-md-6'>
                  <img 
                    src={productCart.image} 
                    className='img-fluid rounded-start' 
                    alt={productCart.title} 
                    style={{ maxHeight: '425px', objectFit: 'contain' }} // Adjust image size
                  />
                </div>
                <div className='col-md-6'>
                  <div className='card-body'>
                    <h5 id='p1' className='card-title'>{productCart.title}</h5>
                    <p className='card-text'>{productCart.description}</p>
                    <h4 className='text-success'>Price: ${productCart.price}</h4>
                    <h6 className='text-warning'>Rating: {productCart.rating.rate} ({productCart.rating.count} reviews)</h6>
                    <button className='button-87 w-100 mt-4'>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}








