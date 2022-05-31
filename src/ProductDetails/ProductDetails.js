import React from 'react'
import { Link } from 'react-router-dom'
function ProductDetails(props) {
    const {product , handleAdd} = props 
    return (
        <div className="h-1/6 w-72 transition m-auto  p-4 mt-6  hover:translate-y-1  rounded hover:shadow-lg translate-x-1 hover:shadow-grey-600" key={product.id}>
            <div className=" relative flex justify-center items-center h-60  rounded overflow-hidden">
            <Link to={'/ItemDetail'}>  
                <div className='cursor-pointer flex overflow-hidden justify-center items-center'>
                <img alt="ecommerce" className=" w-32 object-cover" src={product.image} />
                </div>
            </Link>
            </div>
            <div className="mt-4">
                <h3 className="text-gray-500  text-xs tracking-widest title-font mb-1">{product.category}</h3>
                <h2 className="text-gray-900 title-font p-4 text-lg font-medium">{product.title.slice(0, 16)}</h2>
                <p className="mt-1 p-4">${product.price}</p>
                <p className='bg-indigo-500 hover:bg-indigo-600 cursor-pointer font-mono text-white rounded p-2 ' onClick={() => handleAdd(product)}>Add To Cart</p>
            </div>
        </div>
    )
}

export default ProductDetails