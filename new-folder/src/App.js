/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, HashRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Brands from './components/Brands/Brands';
import Category from './components/Category/Category';
// import Cart from './components/Cart/Cart';

import Signin from './components/Signin/Signin';
import Notfound from './components/Notfound/Notfound';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import Details from './components/Details/Details';

// const router =createBrowserRouter([
//  {path:'',element:<Layout/>, children:[

//   {path:'',element:<Home/>},
//   {path:'Home',element:<Home/>},
//   {path:'Products',element:<Products/>},
//   {path:'Brands',element:<Brands/>},
//   {path:'Category',element:<Category/>},
//   {path:'Cart',element:<Cart/>},
//   {path:'Signin',element:<Signin/>},
//   {path:'Signup',element:<Signup/>},
//   {path:'*',element:<Notfound/>}

//  ]}

// ])
function App() {
  return ( <>
   <HashRouter>
   <Navbar/>
   <Routes>
   <Route  path="/" element={<Signup />}/>
   <Route  path="/home" element={<Home />}/>
   <Route  path="/products" element={<Products />}/>
   <Route  path="/brands" element={<Brands/>}/>
   <Route  path="/category" element={<Category />}/>
   {/* <Route  path="/cart" element={<Cart />}/> */}
   <Route  path="/details/:idd" element={<Details/>}/>
   <Route  path="/signin" element={<Signin />}/>
   <Route  path="/signup" element={<Signup />}/>
   <Route  path="/notfound" element={<Notfound />}/>
   
   </Routes>
   </HashRouter>
  {/* <RouterProvider router={router}>

  </RouterProvider> */}
  </>)
}

export default App;
