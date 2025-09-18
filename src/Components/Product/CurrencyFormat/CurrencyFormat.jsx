import React from 'react'

const CurrencyFormat = ({amount}) => {
    const formattedAmount = "$" + amount.toFixed(2)
  return (
    <div>
      {formattedAmount}
    </div>
  )
}

export default CurrencyFormat
