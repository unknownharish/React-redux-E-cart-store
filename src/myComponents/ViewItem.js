import React from 'react'
import back from './images/backButton.svg';
import style from './cssFiles/viewItem.css';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Add_to_cart} from '../Reducer/action'



export default function ViewItem() {
     const current = useSelector(state=>state.shop.current);
    const dispatch = useDispatch();
    return (
        <div className='viewItem'>
        <img src={current.image} alt="not found" /> 
        <h3>{current.name}  <b>Price:- ${current.price}</b></h3><br/> 
        <div className="description">
        <b>Description-:</b>
        <p>{current.desc}</p> 
        
        </div>
         
        <Link to='/'><img id='img' src={back} alt="" /></Link>   
        <Link id='add' onClick={()=>{dispatch(Add_to_cart(current.id))}} to='/Add_to_cart'>Add to cart</Link>   
        </div>

    )
}
