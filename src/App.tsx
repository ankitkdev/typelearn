import React, { useState } from 'react';
import './App.css';
import Product from './Product'

export interface IProducts {
  name: string;
  price: number;
}

export interface IMagic {
  id: number;
  active: boolean;
}

function App() {
  const [products, setProducts] = useState<IProducts[]>([{ name: "iphone", price: 7899 }, { name: "macbook", price: 9000 }])
  const myData : IMagic ={
    id: 344,
    active: true,
  }

  function handleClick (x: string) : void  {
    console.log(x)
  }
  return (
    <>
      {products.map((product) => {
        return <Product product={product} myData={myData} key={product.name} handleClick={handleClick} />
      })}
    </>
  );
}

export default App;
