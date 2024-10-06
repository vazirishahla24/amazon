import {useState} from 'react';

import ProductContext from './ProductContext';

import axios from 'axios';

function ProductProvider({children}) {

    const url = 'http://localhost:8000';
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);
    
    const getProduct = async (id) =>{
        try{
            const respons = await axios.get(`${url}/products/${id}`)        
            setProduct(respons?.data);
        }finally{
        }        
    }

    const getProducts = async () =>{
        try{
            const respons = await axios.get(`${url}/products`)                        
            setProducts(respons?.data);
        }finally{
        }        
    }

    return (
        <ProductContext.Provider value={{product,products,getProduct,getProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
