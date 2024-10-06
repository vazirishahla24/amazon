import React from 'react'
import {useEffect,useState,useContext} from 'react';

import { useParams } from "react-router-dom"

import CartContext from '../../context/CartContext'

import style from './ProductInvoice.module.css'

function ProductInvoice(props) {

    const {id} = useParams();
    const {getCart,addToCart,removeFromCart} = useContext(CartContext);
    const [buttonState , setButtonState] = useState('Add to cart');
    const options = []
    const [selected , setSelected] = useState(1);

    useEffect(() => {        
        getCart();        
    }, [])

    const submitHandler = () =>{
        if(buttonState === 'Add to cart'){
            addToCart(id * 1,selected,props?.product?.price*1);
            setButtonState('Remove from cart')
        }

        else if(buttonState === 'Remove from cart'){

            console.log(typeof(props.product?.id * 1));
            
            removeFromCart(props.product?.id * 1);
            setButtonState('Add to cart')
        }

        else if(buttonState === 'Update'){
            setButtonState('Remove from cart')
            addToCart(id * 1,selected,props?.product?.price * 1);
        }

    }
    
    const selectHandler = (e) =>{
        setSelected(e.target.value * 1);

        if(buttonState === 'Remove from cart'){
            setButtonState('Update')
        }
        
    }

    for (let i=0;i<27;i++) {
        options.push(<option key={i} value={i+1}>Quantity: {i+1}</option>)
    }

    return (
        <div className={style.invoice}>
        <p>Buy new:</p>
        <h2 className={style.price}><span>$</span>{props.product?.price * selected}</h2>
        <br/>
        <br/>
        <p className={style.shipping}>$91.31 Shipping & Import Fees Deposit to Iran Details Delivery</p>
        <p className={style.time}>Wednesday, May 15</p>
        <div className={style.location}>
            <img src={require("../../assets/locationBlack.avif")} alt=""/>
            <a href="">Deliver to Iran</a>
        </div>
        <h3 className={style.stock}>In Stock</h3>
        <select name="" id="" className={style.select} onChange={selectHandler} >
            {options}
        </select>
    <button className={style.submit} onClick={submitHandler}>{buttonState}</button>

    </div>
    )
}

export default ProductInvoice
