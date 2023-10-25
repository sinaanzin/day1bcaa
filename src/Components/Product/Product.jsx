import React, { useState } from 'react'
import './product.css'
const Product = () => {
const [sno,setSno]=useState('');
const [name,setName]=useState('');
const [qty,setQty]=useState('');
const [price,setPrice]=useState('');
const [store,setStore]=useState('');


const readsno =(event) => {
    setSno(event.target.value);

}
const readname =(event) => {
    setName(event.target.value);
    
}
const readqty =(event) => {
    setQty(event.target.value);
    
}
const readprice =(event) => {
    setPrice(event.target.value);

}
const readstore=(event) => {
    setStore(event.target.value);
   
}



  return (
    <div>
      <h1 className='head'>PRODUCT</h1>
      <form className='details'>
      S.NO<input type='number' onChange={readsno}></input><br></br><br></br>
      NAME<input type='text' onChange={readname}></input><br></br><br></br>
      QTY<input type='number' onChange={readqty}></input><br></br><br></br>
      PRICE<input type='number' onChange={readprice}></input><br></br><br></br>
    STORE<input type='text' onChange={readstore}></input><br></br><br></br>
    <button type="submit">SUBMIT</button><br></br>
      
     </form>
    </div>
  )
}

export default Product

