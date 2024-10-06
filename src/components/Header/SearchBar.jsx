import React from 'react'

import style from './SearchBar.module.css';

function SearchBar() {
    return (
        <form className={style.form}>
            <select className={style.select}>
                <option value="All">All</option>
                <option value="mobiles">mobiles</option>
                <option value="laptops">laptops</option>
                <option value="mobile accessories">mobile accessories</option>
            </select>
            <input className={style.input} type="text"></input>
            <button className={style.button}><img alt="" src={require('../../assets/search.webp')}></img></button>
        </form>
    )
}

export default SearchBar
