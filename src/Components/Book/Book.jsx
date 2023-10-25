import React, { useState } from 'react'
import './book.css'

const Book = () => {
const [sno,setSnoo]=useState('');
const [name,setNamee]=useState('');
const [author,setAuth]=useState('');
const [pdate,setPdate]=useState('');
const [price,setPricee]=useState('');
 
const readsnoo =(event) => {
    setSnoo(event.target.value);
    
}
const readbookname =(event) => {
    setNamee(event.target.value);

}
const readauthor =(event) => {
    setAuth(event.target.value);
   
}
const readpdate =(event) => {
    setPdate(event.target.value);
    
}
const readpricee =(event) => {
    setPricee(event.target.value);

}
  







  return (
    <div>
      <h1 className='qq'>BOOK STALL</h1>
      <form className='pp'>
      S.NO<input type='text' onChange={readsnoo}/><br></br>
      BOOK NAME <input type='text' onChange={readbookname}/><br></br>
      AUTHOR <input type='text' onChange={readauthor}/><br></br>
      PUBLISHED DATE <input type='text' onChange={readpdate}/><br></br>
      PRICE <input type='text' onChange={readpricee}/><br></br>
      </form>
    </div>
  )
}

export default Book
