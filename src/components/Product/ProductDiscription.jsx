import React from 'react'
import {useState} from 'react'

import style from './ProductDiscription.module.css'


function ProductDiscription(props) {
    
    const [styleProduct, setstyleProduct] = useState(null);
    const product = props.product;

    const stars = []

    for (let i=0;i<5;i++) {
        if(i < product?.rating[0] -1 ){
            stars.push(<img key={i} src={require('../../assets/star1.png')} alt=""></img>)
        }
        else{
            stars.push(<img key={i} src={require('../../assets/star2.png')} alt=""></img>)
        }
    }

    return (
        <>
        {props.product &&
            <div className={style.discription}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <a href="">Visit the acer Store</a>
            <div className={style.rank}>
                <p>{product.rating[0]}</p>
                <div>{stars}</div>
                <a href="">{product.rating[1]} ratings</a>
                <span>|</span>
                <a href="">Search this page</a>
            </div>
            <p>{product.rating[2]} bought in past month</p>
            <hr/>
            <p className={style.price}><span>$</span>{product.price}</p>
            <p className={style.listPrice}>List Price: <span>${product.ListPrice}</span></p>
            <p>$91.31 Shipping & Import Fees Deposit to Iran <span>Details</span></p>
            <p>Available at a lower price from <span>other sellers</span> that may not offer free Prime shipping.</p>
            <p><span>Extra Saving</span> Amazon Music offer with this purchase 1 Applicable Promotion </p>
            <hr/>
    

            {product.styles &&
            <>
            <p>style: {styleProduct}</p>
            <div className={style.style}>
                {product.styles.map((style,index) =>
                    <div key={index} onClick={() => setstyleProduct(style.title)}>
                        <p>{style.title}</p>
                        <p>${style.price}</p>
                </div>
                )}
            </div> 
            </>
            }

    
            <div className={style.specifications}>
                <ul>
                    {product.Specifications.titles.map((title,index) =>
                        <li key={index}>{title}</li>
                    )}
                </ul>
                <ul>
                    {product.Specifications.descriptions.map((description,index) =>
                        <li key={index}>{description}</li>
                    )}
                </ul>
            </div>
    
            <hr/>
    
            <h2>About this item</h2>
            <ul className={style.moreInformation}>
                {product.MoreInformation.map((information,index) =>
                        <li key={index}>{information}</li>
                    )}
            </ul>
        </div>
        }
    
        
        </>
        
    
    )
}

export default ProductDiscription
