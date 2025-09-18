import React, { useContext, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import Classes from "./payment.module.css"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/Product/CurrencyFormat/CurrencyFormat'
import { useNavigate } from 'react-router-dom'
import { Type } from '../../utility/actiontype'

function Payment() {
  const [{basket,user},dispatch]=useContext(DataContext)
  const totalItem=basket?.reduce((amount,item)=>{
    return item.amount+amount
  },0)
   const total = basket.reduce((amount, item) => {
     return item.price * item.amount + amount;
   }, 0);
  const navigate = useNavigate()
const handlePayment = async (e) => {
  e.preventDefault();
  dispatch({
    type : Type.EMPTY_BASKET
  })
  navigate("/orders",{state:{msg:"you have placed new order"}})
};


  return (
    <Layout>
      <br />
      <br />
      <br/>
      <br />
      <div className={Classes.payment_header}>checkout({totalItem})items</div>
      <section className={Classes.payment}>
        <div className={Classes.flex}>
          <h3>Delivary Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago,IL</div>
          </div>
        </div>
        <hr />
        <div className={Classes.flex}>
          <h3>Review items and Delivary</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={Classes.flex}>
          <h3>Payment method</h3>
          <div className={Classes.payment_card_container}>
            <div className={Classes.payment_details}>
              <form onSubmit={handlePayment}>
              <div className={Classes.payment_price}>
                <div>
                  <span style={{display:"flex", gap:"10px"}}>
                    <p>
                      Total Order | </p><CurrencyFormat amount={total} />

                  </span>
                </div>
                <button type='submit'>
                  Pay Now
                </button>

              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment
