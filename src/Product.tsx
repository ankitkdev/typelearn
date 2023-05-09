import { IProducts } from './App'
import {IMagic} from './App';

interface ProductProps {
    product: IProducts;
    myData: IMagic
    handleClick(name: string): void; 
}

function Product({product, myData, handleClick}: ProductProps) {
  return (
    <div>
      {product.name}
      {product.price}
      {myData.id}
      <button onClick={()=>handleClick(product.name)}>click me</button>
    </div>
  );
}

export default Product;
