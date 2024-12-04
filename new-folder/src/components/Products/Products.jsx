import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Products.css';
import { Blocks } from 'react-loader-spinner';

export default function Products({ addToCart }) {
  const [productList, setProduct] = useState([]); // Initialize as an empty array

  // Fetch product data
  async function getProducts() {
    let { data } = await axios.get('https://fakestoreapi.com/products');
    setProduct(data); // Update the state with fetched data
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='row'>
      {productList.length > 0 ? (
        productList.map((product) => (
          <div className='col-3 p-5' key={product.id}>
            <div className='products'>
              <p id='p1' className='text-main'>{product.category}</p>
              <Link to={`/details/${product.id}`}>
                <img src={product.image} className='w-50' height={230} alt={product.title} />
                <h5 className='d-flex justify-content-between'>{product.title}</h5>
              </Link>
              <div>
                <p>{product.price}$</p>
              </div>
              <button
                className='button-87'
                onClick={() => addToCart({ name: product.title, price: product.price })}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
          <Blocks height={80} width={80} color="#f09819" ariaLabel="blocks-loading" visible={true} />
        </div>
      )}
    </div>
  );
}



