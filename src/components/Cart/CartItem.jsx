import React from 'react'
import {useState,useEffect,useContext} from 'react';

import CartContext from '../../context/CartContext';

import style from './CartItem.module.css'


function CartItem(props) {

    const {cart,getCart,updateCart,removeFromCart} = useContext(CartContext);
    const [selected , setSelected] = useState(1);
    const [buttonState , setButtonState] = useState('Delete');
    const options = []

    useEffect(() => {        
        getCart();  
    }, [])

    const x = cart.find(item => item.productId == props?.product?.id);     
    
    for (let i=0;i<27;i++) {
        if(i === x?.count - 1){
            options.push(<option key={i} value={i+1} selected>Quantity: {i+1}</option>)

        }else{
            options.push(<option key={i} value={i+1}>Quantity: {i+1}</option>)
        }
    }

    const selectHandler = (e) =>{
        setSelected(e.target.value * 1);
        if(buttonState === 'Delete'){
            setButtonState('Update')
        }        
    }

    const buttonHandler = () =>{
        if(buttonState === 'Delete'){
            removeFromCart(props?.product?.id * 1);
        }
        else{
            setButtonState('Delete')
            updateCart(props?.product?.id * 1,selected,props?.product?.price);
        }
    }


    return (
        <div className={style.cartItem}>
            {props?.product && <img  className={style.image} src={require(`../../assets/pro${props?.product?.id}.jpg`)} alt=""/>}
            <div className={style.description}>
                <p>{props?.product?.description}</p>
                
                <h3 className={style.stock}>In Stock</h3>
                <img  className={style.prime} src={require(`../../assets/prime.avif`)} alt=""/>
                <div className={style.gift}>
                        <input type="checkbox" id="gift" name="gift" value=""/>
                        <label htmlFor="gift">This will be a gift</label>
                </div>

                <p><span>Style Name:</span> 0.5 litre work container</p>
                <p><span>Colour name:</span> white</p>

                <div className={style.selection}>
                    <select name="" id="" className={style.select} onChange={selectHandler} >
                        {options}
                    </select>
                    <button onClick={buttonHandler}>{buttonState}</button>
                    <button>Save for later</button>
                    <button>See more like this</button>
                    <button>Share</button>
                </div>
            </div>
            <p className={style.price}><span>$</span>{(x?.count * props?.product?.price).toFixed(2)}</p>
        </div>
    )
}

export default CartItem
