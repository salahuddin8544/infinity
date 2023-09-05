import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardItem from './CardItem'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [storeProduct,setStoreProduct] = useState([])
  useEffect(()=>{
      fetch('product.json')
      .then(res=>res.json())
      .then(data=> setProducts(data))
  },[])
 console.log(storeProduct);
  return (
    <>
    
     <div className='flex'>
     <div className='grid w-1/2 my-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                products.map(product => <CardItem
                key={product._id}
                product = {product}
                setStoreProduct={setStoreProduct}
                ></CardItem>)
            }
        </div>
        <div className=''>
          <h3>Product Details</h3>
          
        <ul>
        <li>Product Name:{storeProduct.title}</li>
        <li>Price: {storeProduct.reselPrice} <button onClick={()=>setStoreProduct([])} className='btn text-white bg-blue-500'>X</button></li>
       </ul>
      
        </div>
     </div>
    </>
  )
}

export default App
