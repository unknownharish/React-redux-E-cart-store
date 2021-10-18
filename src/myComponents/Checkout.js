import React from 'react'
import {useState,useEffect} from 'react';
import './cssFiles/checkout.css'
import Display_for_CheckOut from './Display_for_CheckOut';
import { useSelector } from 'react-redux';

export default function Checkout() {

    let cart = useSelector(state => state.shop.cart);
    const [items, setitems] = useState(0)
    const [price,setprice] = useState(0);
    useEffect(()=>{
        let total = 0;
        let itemCount = 0;
        

        cart.map(item=>{
            total+= item.price*item.qty;
            itemCount+= item.qty; 
            
        });
        setprice(total);
        setitems(itemCount);
        
    },[setprice ,cart,price,setitems,items])



    return (
        <>


            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                <div id='check'>
                    <div className="chekoutList">
                        <h2>Checkout List</h2>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Total Items: </th>
                                    <th scope="col"> {items}</th>

                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Grand total: </th>
                                    <td id='p'> ${price}</td>

                                </tr>


                            </tbody>
                        </table>

                        <input className='btn pay ' type="button" value="Proceed to pay" />

                    </div>
                </div>

                {
                    cart.length !== 0 ? cart.map(item => {
                        return (< Display_for_CheckOut product={item} />)
                    }) :
                        <b>No item's in cart :(</b>
                }




            </div>
        </>
    )
}
