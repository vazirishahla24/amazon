import React from 'react'

import style from './HeaderElement.module.css';

function HeaderElement(props) {
    
    return (
        <div className={style.headerElement}>
            {props.imgSrc && <img className={style.img} alt="" src={props.imgSrc}></img>}
            <div>
                <p className={style.text}>{props.text}</p>
                <p className={style.title}>{props.title}
                    {props.dropArrow && <img className={style.dropArrow} alt="" src={require('../../assets/downarrow.webp')}></img>}
                </p>
            </div>
        </div>
    )
}

export default HeaderElement
