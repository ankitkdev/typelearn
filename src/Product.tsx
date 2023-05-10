import { IProducts } from './App'
import {IMagic} from './App';

interface ProductProps {
    product: IProducts;
    myData: IMagic
    handleClick(name: string): void; 
    children: React.ReactNode
}

function Product({product, myData, handleClick, children}: ProductProps) {
  return (
    <div>
      {product.name}
      {product.price}
      {myData.id}
      {children}
      <button onClick={()=>handleClick(product.name)}>click me</button>
    </div>
  );
}

export default Product;
