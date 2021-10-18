import React from 'react';
import { Link } from 'react-router-dom';
import {Add_to_cart,Load_Current_Item} from '../Reducer/action';
import {useDispatch } from 'react-redux';
import styles from './cssFiles/Products.css';

export default function Products(props) {

//    const current = useSelector(state=>state.shop.current)

    const dispatch = useDispatch();

    return (
      

        <div style={{borderRadius: '21px'}} className='container-main'>

            <div className="comp-left">
            <img src={props.product.image} alt='cannot display' />

            <p><b>${props.product.price}</b></p>
            </div>
            <div>
            <p style={{fontSize: '26px'}}><b>Description</b></p>
            <p>{props.product.desc}</p>

            <Link to=""  onClick= {()=>{dispatch(Add_to_cart(props.product.id))}} >Add to cart</Link>
            <Link to="/view_item" onClick={()=>{dispatch(Load_Current_Item(props.product))}}>View </Link>
            </div>

        </div>

      
    
    )
}
