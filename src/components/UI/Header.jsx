import React from 'react';
import {useState} from 'react';

import {Link} from 'react-router-dom';

import SearchBar from '../Header/SearchBar';
import HeaderElement from '../Header/HeaderElement';
import CartIcon from '../Header/CartIcon';

import style from './Header.module.css';

function Header() {
       
    return (
        <>
        <div className={style.headerTop}>
            <img className={style.logo} alt="" src={require('../../assets/logo.webp')}/>
            <HeaderElement text="Deliver to" title="Iran" imgSrc={require("../../assets/location.webp")} dropArrow={false}></HeaderElement>
            <SearchBar></SearchBar>
            <HeaderElement title="EN" imgSrc={require("../../assets/lang.webp")} dropArrow={true}></HeaderElement>
            <HeaderElement text="Hello,sign in" title="Account & List" dropArrow={true}></HeaderElement>
            <HeaderElement text="Returns" title="& Orders" dropArrow={false}></HeaderElement>
            <Link to="/cart"><CartIcon/></Link>
        </div>
        <nav className={style.nav}>
            <ul>
                <li><img src={require('../../assets/burgerMenu.webp')} alt=""/> ALL</li>
                <li>Today's Deals</li>
                <li>Customer Servise</li>
                <li>Registry</li>
                <li>Gift Cards</li>
                <li>Sell</li>
            </ul>
        </nav>
        </>
    )
}

export default Header
