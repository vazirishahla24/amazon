import {useState} from 'react';

import CartContext from './CartContext';

import axios from 'axios';


function CartProvider({children}) {

    const url = 'http://localhost:8000';
    const [cart, setCart] = useState(null);
    
    const getCart = async () =>{
        try{
            const respons = await axios.get(`${url}/cart`);            
            setCart(respons?.data);          
        }finally{
        }        
    }

    const addToCart = async (id,number,price) =>{
        try{
            let x = cart.find(item => item.productId === id);

            if(x === undefined ){
                axios.post(`${url}/cart`,
                {
                "productId": id,
                "count": number,
                "price": number * price
                })
            }
            else{
                axios.put(`${url}/cart/${x.id}`, {
                    "id": x.id,
                    "productId": x.productId,
                    "count": number + x.count,
                    "price": x.price + (number * price)
                });
            }
            getCart();
        }finally{
        }        
    }


    const updateCart = async (id,number,price) =>{
        try{
            let x = cart.find(item => item.productId === id);
            
            await axios.put(`${url}/cart/${x.id}`, {
                    "id": x.id,
                    "productId": x.productId,
                    "count": number,
                    "price": number * price
                });
            
            getCart();
        }finally{
        } 
    }


    const removeFromCart = async (id) =>{
        try{
            let x = cart.find(item => item.productId === id);            
            await axios.delete(`${url}/cart/${x.id}`);
            getCart();
        }finally{
        }        
    }

    const removeCart = async () =>{
        try{
            for(let i = 0; i < cart.length ; i++){
                await axios.delete(`${url}/cart/${cart[i].id}`);
            }          
            getCart();
        }finally{
        }
    }


    return (
        <CartContext.Provider value={{cart,getCart,addToCart,updateCart,removeFromCart,removeCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
