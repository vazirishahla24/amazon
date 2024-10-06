import React from 'react'
import {useContext,useEffect} from 'react'

import { useParams } from "react-router-dom"

import ProductDiscription from '../components/Product/ProductDiscription'
import ProductInvoice from '../components/Product/ProductInvoice'

import ProductContext from '../context/ProductContext'

import style from './ProductDetails.module.css'


function ProductDetails() {
    
    const {id} = useParams();
    const {product,getProduct} = useContext(ProductContext);
    
    useEffect(() => {        
        getProduct(id);        
    }, [])
        

    return (
        <div className={style.product}>
            <img  className={style.image} src={require(`../assets/pro${id}.jpg`)} alt=""/>
            <ProductDiscription product={product}/>
            <ProductInvoice product={product}/>
        </div>
    )
}

export default ProductDetails
