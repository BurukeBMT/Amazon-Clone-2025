import React ,{useEffect, useState}from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from "./productdetail.module.css"
import ProductCard from "../../Components/Product/ProductCard"
import{useParams} from "react-router-dom"
import Loader from '../../Components/Loader/Loader'

function ProductDeail() {
       const [product, setProduct] = useState({});
       const [isLoading,setisLoading]= useState(false)
       const { productId} = useParams();
       // Removed API fetch for frontend-only app
       useEffect(() => {
        setisLoading(true)
        // Dummy product data
        setProduct({
          id: productId,
          title: "Sample Product",
          price: 99.99,
          image: "https://via.placeholder.com/300",
          rating: 4.5,
          description: "This is a sample product description."
        });
        setisLoading(false)
       }, []);
  return (
  <Layout><br /><br /><br />
    {isLoading?(<Loader/>) :(
        <ProductCard 
        product={product}
        flex={true}
        renderDesc={true}
        renderAdd={true}
        />)}
  </Layout>)
}

export default ProductDeail
