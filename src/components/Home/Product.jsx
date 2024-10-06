import React from 'react'
import { Link } from 'react-router-dom';

import style from './Product.module.css'

function Product(props) {

    const stars = []

    let i = 0;
    for (i=0;i<5;i++) {
        if(i < props.product?.rating[0] -1 ){
            stars.push(<img key={i} src={require('../../assets/star1.png')} alt=""></img>)
        }
        else{
            stars.push(<img key={i} src={require('../../assets/star2.png')} alt=""></img>)
        }
    }
    
    return (

        <div>
            <Link to={`/product/${props.product?.id}`} className={style.product}>
                <img className={style.image} alt="" src={require(`../../assets/pro${props?.product?.id}.jpg`)}/>
                <h3>{props?.product?.title}</h3>

                <div>
                    <p className={style.price}><span>$</span>{props?.product?.price}</p>
                </div>

                <p className={style.description}>{props.product?.description}</p>
                
                <div className={style.rank}>
                        <div>{stars}</div>
                        <p>{props.product?.rating[1]}</p>
                </div>

                <Link to={`/product/${props.product?.id}`} className={style.link}>see more...</Link>
            </Link>
 

        </div>
    )
}

export default Product
