import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector } from 'react-redux';

function Header() {
    const items = useSelector(state=>state.cart)
    return (
        <div className='sticky top-0 left-0 drop-shadow-sm z-50 bg-white '>
            
                <div className="flex  flex-row items-center justify-between p-4">
                    <div className="">
                        <Link to={'/'}>
                            <span className="ml-3 font-bold p-2 text-black  text-4xl">Redux Store</span>
                        </Link>
                    </div>
                    
                    <Link to={'/cart'}>
                    <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">Cart items: {items.length}
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>

                    </Link>
                    
                </div>
        
        </div>
    )
}

export default Header