import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cartSlice';
import { fetchProduct, STATUSES } from '../../store/productsSlice';
import SimpleSlider from '../swiper'
import ProductDetails from '../../ProductDetails/ProductDetails';
function Home() {
    // const [products, setProducts] = useState([]);
    const disptech = useDispatch();
    const { data: products, status } = useSelector(state => state.products);



    useEffect(
        () => {
            disptech(fetchProduct());

        }, [disptech]
    )
    const handleAdd = (product) => {
        disptech(addToCart(product));

    }

    return (
        <div className=''>
            <SimpleSlider/>
          
            <h1 className='text-6xl p-24' >Products</h1>

            {(products.map(product=>  console.log(product.category)))}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    {status === STATUSES.ERROR ? <div>Error</div> : null

                    }
                   

                    {status === STATUSES.LOADING ? <div>Loading</div> :
                        <div className="flex justify center flex-wrap -m-4">
                            {
                                products.map(product => <ProductDetails key={product.id} handleAdd={handleAdd} product={product} />)
                            }


                        </div>}
                </div>
            </section>
        </div>
    )
}

export default Home