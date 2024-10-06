import React from 'react'

import style from './FooterElement.module.css'

function FooterElement(props) {
    return (
        <div className={style.footerElement}>
            <img className={style.img} src={props.imgSrc} alt=""/>
            <p className={style.title}>{props.title}</p>
        </div>
    )
}

export default FooterElement
