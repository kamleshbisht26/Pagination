import React from 'react'
 import './Products.scss'
const Products = ({prod}) => {

  return (
<div className='Product_top' key={prod.id}>
    <div className='Image_Product'><img src={prod.thumbnail} alt={prod.title}/></div>
    <div className='second_section'>
    <div style={{textAlign:"center"}}>{`Name:  ${prod.title}`}</div>
        {/* <div>{`Rating : ${prod.rating}`}</div>
        <div>{`Price: ${prod.price}`}</div>
        <div>{`Stock : ${prod.stock}`}</div> */}
     
       
    </div>
</div>
  )
}

export default Products