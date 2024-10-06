import React from 'react'

import FooterElement from '../Footer/FooterElement'

import style from './Footer.module.css'

function Footer() {

    const footerData = [
    {id:0 ,title:'Get to Know Us' ,list:['Careers','Blog','About Amazon','Investor Relations','Amazon Devices','Amazon Science']},
    {id:1 ,title:'Make Money with Us' ,list:['Sell products on Amazon','Sell on Amazon Business','Sell apps on Amazon','Become an Affiliate','Advertise Your Products','Self-Publish with Us','Host an Amazon Hubs','See More Make Money with Us']},
    {id:2 ,title:'Amazon Payment Products' ,list:['Amazon Business Card','Shop with Points','Reload Your Balance','Amazon Currency Converter']},
    {id:3 ,title:'Let Us Help You' ,list:['Amazon and COVID-19','Your Account','Your Orders','Shopping Rates & Policies','Returns & Replacements','Manage Your Content and Devices','Amazon Assistant','Help']}

]

    return (
        <>
            <div className={style.goTop}>Back to top</div>
            <div className={style.footerTop}>
                {footerData.map(footerItem =>
                <div key={footerItem.id}>
                    <p>{footerItem.title}</p>
                    <ul>
                        {footerItem.list.map((element,index) =>
                        <li key={index}>{element}</li>    
                        )}
                    </ul>
                </div>
                )}
            </div>

            <div className={style.footerBottom}>
                <div className={style.container}>
                    <img className={style.logo} alt="" src={require('../../assets/logo.webp')}/>
                    <ul>
                        <li><FooterElement title="English" imgSrc={require("../../assets/globe.webp")}></FooterElement></li>
                        <li><FooterElement title="USD - U.s Dollar" imgSrc={require("../../assets/location.webp")}></FooterElement></li>
                        <li><FooterElement title="United States" imgSrc={require("../../assets/lang.webp")}></FooterElement></li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default Footer
