import React from 'react'
import { useSelector } from 'react-redux';


const CartList = () => {
  const product = useSelector((state: any) => state.productSlices);

  console.log(product, "im the productslice");
  
  return (
    <div>CartList</div>
  )
}

export default CartList;