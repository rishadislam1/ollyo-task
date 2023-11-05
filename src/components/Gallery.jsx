

import { useEffect } from 'react';
import telephoneImage from '../assets/images/image-11.jpeg';
import { useState } from 'react';
import Product from './product';


const Gallery = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    console.log(products)

    return (
        <div className="mt-10 p-5">
            <div className="grid grid-cols-5 justify-center items-center gap-10">
                <img src={telephoneImage} alt="" className='rounded-xl border border-gray-400 col-span-2 row-span-2 cursor-pointer' />
                {
                    products.map(product=><Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Gallery;