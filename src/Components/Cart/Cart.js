import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { remove } from '../../store/cartSlice';
import cartEmpty from '../Cart/Empty.jpg'


function Cart() {
    const items = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const handleRemove = (id)=>{
        dispatch(remove(id));
    }
    return (
        <div>
            <div>
            {items.length===0 ?(<div className='flex flex-col items-center my-40  justify-center'><img className=' w-48 select-none '  src={cartEmpty} alt="" /> <h1>Nothing Over Here Go Add Something To Cart!! </h1></div>) : items.map(item => {
                return (
                <div key={item.id} className=" flex items-center p-8 justify-between my-3">
                    <img src={item.image} className='w-20 ' alt={item.title} />
                    <div>
                        <h2 className='bold'>{item.title}</h2>
                        <h4>{item.price}</h4>
                    </div>
                        <button onClick={()=>handleRemove(item.id)} className='border text-indigo-500 border-indigo-500 p-2 w-32  rounded hover:bg-indigo-600 shadow-sm hover:text-white'>Remove</button>
                </div>)
            })}
            </div>

        </div>
    )
}

export default Cart