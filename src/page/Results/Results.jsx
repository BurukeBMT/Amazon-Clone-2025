import React ,{useEffect, useState}from 'react'
import Layout from '../../Components/Layout/Layout'
import {useParams} from "react-router-dom"
import classes from "./Results.module.css"
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'
function Results() {
   const [result, setResult] = useState([]);
   const [isLoading,setisLoading] = useState(false)
   const { categoryName } = useParams();
   // Removed API fetch for frontend-only app
   useEffect(()=>{
    setisLoading(true)
    // Dummy products data
    setResult([
      {
        id: 1,
        title: "Sample Product 1",
        price: 49.99,
        image: "https://via.placeholder.com/300",
        rating: 4.0,
        category: categoryName
      },
      {
        id: 2,
        title: "Sample Product 2",
        price: 79.99,
        image: "https://via.placeholder.com/300",
        rating: 4.5,
        category: categoryName
      }
    ]);
    setisLoading(false);
   },[])
  
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <br />
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {result.map((product) => (
              <ProductCard key={product.id} product={product} 
              renderAdd={true}/>
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results
