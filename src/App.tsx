import React, { useState } from 'react';
import './App.css';
import Product from './Product'

export interface IProducts {
  name: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProducts[]>([{ name: "iphone", price: 7899 }, { name: "macbook", price: 9000 }])
  return (
    <>
      {products.map((product)=>{
        return <Product product={product} key={product.name}/>
      })}
    </>
  );
}

export default App;
