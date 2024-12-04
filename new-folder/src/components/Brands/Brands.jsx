/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Brands.css';
import axios from 'axios';
import { useQuery } from 'react-query';

export default function Brands() {
  const getBrands = async () => {
    const response = await axios.get('https://672235832108960b9cc366f2.mockapi.io/api/v1/brand');
    return response.data; // Ensure this matches your API's response structure
  };

  const { data, isLoading, isFetching, error } = useQuery('brands', getBrands);

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Error fetching brands: {error.message}</div>;

  // Check if data is an array and map through it
  if (!Array.isArray(data)) {
    return <div>No brands available</div>;
  }

  return (
    <div className='row row-cols-3'>
      {data.map((brand) => (
        <div className='d-flex justify-content-center flex-column p-5' key={brand.id}>
                    <img src={brand.logo} alt={brand.name} className=' w-75 p-1 bg-danger' height={200} />

          <h2 className='p-2 mt-2 '>{brand.name}</h2>
          
        </div>
      ))}
    </div>
  );
}
