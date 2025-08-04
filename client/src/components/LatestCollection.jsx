import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [lastestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    },[])

    // console.log(products);
    
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title title1={'LATEST'} title2={'COLLECTIONS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque maxime, sequi, repellat placeat, saepe quo tempora quibusdam quam assumenda similique non soluta reiciendis molestiae ipsa repellendus. Molestias, doloremque fuga? Voluptatem?
            </p>
        </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                lastestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image ={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>

    </div>
  )
}

export default LatestCollection
