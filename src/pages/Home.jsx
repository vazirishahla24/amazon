import React from 'react'
import {useEffect,useContext} from 'react'

import ProductContext from '../context/ProductContext'

import Product from '../components/Home/Product'

import style from './Home.module.css'


function Home() {

    const {products,getProducts} = useContext(ProductContext);

    useEffect(() => {        
        getProducts();        
    }, [])    

    return (
        <div>
            <div className={style.home}>
                <img className={style.background} alt="" src={require('../assets/bg-image.avif')}/>
                <div className={style.productList}>
                    {products?.map(product => 
                        <Product key={product.id} product={product}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home
