import React from 'react'
import './Home.css'
import Products from '../Products/Products'
import Category from '../Category/Category'
export default function Home() {
  return (<>
   <div> 
    <h3 id='hc3'>Categories</h3>
      <Category/>
    </div>
    <div>
      <h3 id='hp3'>Products</h3>
     <Products/>
    </div>
  </>
   
  )
}
