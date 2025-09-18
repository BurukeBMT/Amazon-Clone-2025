import React, { useContext } from 'react'
import CurrencyFormat from './CurrencyFormat/CurrencyFormat';
import classes from './product.module.css'

function ProductCard({product,flex,renderDesc ,renderAdd}) {
    const { image ,title, id, rating ,price,description } = product;

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <div>
        <img src={image} alt="" />
      </div>
      <div className={classes.rating}>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard
