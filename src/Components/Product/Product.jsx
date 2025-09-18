import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import classes from "./product.module.css";
import Loader from '../Loader/Loader';
function Product() {
    const [product,setProduct]=useState([])
    const [isLoading, setisLoading]= useState(false)
    useEffect(()=>{
      setisLoading(true)
      // Removed API fetch for frontend-only app
      setProduct([
        {
          id: 1,
          title: "Sample Product 1",
          price: 49.99,
          image: "https://via.placeholder.com/300",
          rating: 4.0,
        },
        {
          id: 2,
          title: "Sample Product 2",
          price: 79.99,
          image: "https://via.placeholder.com/300",
          rating: 4.5,
        }
      ])
      setisLoading(false)
    },[])
    
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {product.map((singleProduct) => {
            return (
              <ProductCard product={singleProduct} key={singleProduct.id} 
              renderAdd={true}/>
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product
