import React from 'react';
import { IProducts } from './App'

interface ProductProps {
    product: IProducts;
}

function Product({product}: ProductProps) {
  
  return (
    <div>
      {product.name}
    </div>
  );
}

export default Product;
