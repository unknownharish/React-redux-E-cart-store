import React from 'react'
import logo from '../myComponents/images/shopping-logo.jpg'
import kart from '../myComponents/images/cart-fill.svg'
import  './cssFiles/header.css';
import  './cssFiles/font.css'
import { Link } from 'react-router-dom';
import {useState ,useEffect} from 'react';
import {useSelector} from 'react-redux';

function Header() {

   
    const cart  = useSelector(state=>state.shop.cart);
    const [count, setcount] = useState(0);
    useEffect(()=>{
       let Cartcount = 0;
       cart.forEach((item)=>{
           Cartcount+= item.qty;
       });

       setcount(Cartcount);

    },[setcount,cart])
 
    return (
        <div style={{  position: 'sticky',top: '0'}}>
         <nav>
             <div className="con1">
    
               <Link to=''> <img src={logo} alt="" /></Link>
             <ul>
                 <div className='linkto' style={{display:'flex'}}>
                 <li><Link  to='/'>Palace</Link> </li>
                 <li><Link  to='/'>About</Link></li>
                 </div>
             </ul>
             </div>

             <div className="con2">
                 <Link to="/checkout_cart">  <img src={kart} alt="" /></Link>
                 <div className="items_count"><b>{count}</b></div>
           
            </div>
         </nav>
        </div>
    )
}

export default React.memo(Header);