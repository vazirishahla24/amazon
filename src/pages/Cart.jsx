import React from 'react'
import {useEffect,useContext} from 'react';

import {Link} from 'react-router-dom';

import CartItem from '../components/Cart/CartItem'

import CartContext from '../context/CartContext'
import ProductContext from '../context/ProductContext'

import style from './Cart.module.css'

function Cart() {

    const {cart,getCart,removeCart} = useContext(CartContext);
    const {products,getProducts} = useContext(ProductContext);  

    let subtotal = 0;

    let cartProduct = [];

    useEffect(() => {        
        getCart();  
        getProducts();
    }, [])
    
    for(let i = 0; i< cart?.length ; i++){
        cartProduct.push(products.filter(item => item.id == cart[i].productId));
        subtotal = subtotal + cart[i]?.price;
    }    

    if(cart?.length > 0){
        return (
            <div className={style.cart}>
                <div className={style.shoppingBasket}>
                    <h1>Shopping Basket</h1>
                    <button onClick={() => removeCart()}>Deselect all items</button>
                    {cartProduct.map((element,index) => 
                        <CartItem key={index} product={element[0]}/>
                    )}
                    <p>Subtotal ({cart.length} item): <span>${subtotal.toFixed(2)}</span></p>
                </div>

                <div className={style.subtotal}>
                    <p>Subtotal ({cart.length} item): <span>${subtotal.toFixed(2)}</span></p>
                    <br/>
                    <div className={style.gift}>
                        <input type="checkbox" id="gift" name="gift" value=""/>
                        <label htmlFor="gift">This will be a gift</label>
                    </div>
                    <button className={style.submit}>Proceed to Checkout</button>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={style.cart}>
                <div className={style.emptyCart}>
                    <h1>Your Amazon Basket is empty.</h1>
                    <p>Check products page for shopping. <Link to="/" className={style.link}>continue shopping</Link></p>
                </div>
            </div>
        )
    }    

}

export default Cart
