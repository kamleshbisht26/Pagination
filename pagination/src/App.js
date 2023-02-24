import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import Products from './components/Products';

function App() {
  const[products,setProducts]=useState([])
console.log(products.tit)
  const fetchProducts=async()=>{
    const res=await fetch('https://dummyjson.com/products?limit=100')
    const data=await res.json();

    if(data && data.products)
    {
      setProducts(data.products)
    }
  }

  useEffect(()=>{
    fetchProducts();
  },[]);
  return     <div className='app_cover'>
    {
      products.map((prod)=>{
        return (<div key={prod.id} className="cover">
          <Products prod={prod}/>
</div>)

      })
    }

<div>
  hello
</div>
  </div>

  
   
  
}

export default App;
