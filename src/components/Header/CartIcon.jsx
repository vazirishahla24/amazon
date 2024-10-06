import React from 'react'
import {useEffect,useContext} from 'react';

import CartContext from '../../context/CartContext'

import style from './CartIcon.module.css'

function CartIcon() {

    const {cart,getCart} = useContext(CartContext);  

    useEffect(() => {        
        getCart();
    }, [])

    return (
        <div className={style.cart}>
            <img className={style.img} alt="" src={require("../../assets/cart.webp")}></img>
            <p className={style.title}>Cart</p>
            <span className={style.count}>{cart?.length}</span>
        </div>
    )
}

export default CartIcon
