import React from 'react'
import { useState } from 'react';
import './cssFiles/checkout.css';
import del from './images/delete.svg';
import { useDispatch } from 'react-redux';
import { Remove_from_cart, Adjust_qty } from '../Reducer/action';

function Display_for_CheckOut({ product }) {

    // const item_cart = useSelector(state => state.shop.cart);
    const dispatch = useDispatch();

    const [adjustQty, setadjustQty] = useState(product.qty);



    const changeHandler = (e) => {

        setadjustQty(e.target.value);
        dispatch(Adjust_qty(product.id, e.target.value))

    }




    return (
        <div>
            <div className="container one">
                <div>
                    <img src={product.image} alt="" />
                    <h4>Price ${product.price}</h4>
                </div>

                <div>
                    <h2>{product.name} </h2>
                    <p>{product.desc}</p>

                    <div style={{ display: 'flex' }}>
                        <button onClick={() => { dispatch(Remove_from_cart(product.id)) }}><img className='del' src={del} alt="trash image" /></button>

                        <div className='editqty'>
                            <label style={{ margin: '3px 3px', fontSize: '18px', fontWeight: '600' }} htmlFor="adjustqty">Adjust Qty: </label>
                            <input type="number" name="" value={adjustQty} id="adjustqty" min='1' onChange={(e) => { changeHandler(e) }} />
                        </div>

                    </div>



                </div>


            </div>
        </div>
    )
}

export default Display_for_CheckOut;

