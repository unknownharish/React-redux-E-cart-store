import React from 'react';
import Products from './Products'
import { useSelector } from 'react-redux';

export default function Items() {

    const list = useSelector(state => state.shop.products);
  
    return (
        <div>
            <h2 style={{ fontSize: '50px' }}>Product's </h2> <br />
            {
               list.map(product=> <Products key={product.id} product={product}/>
               )

           } 

          
        </div>
    )
}
