import React from 'react'
import StarRating from './StarRating'
import { Rating, product } from '@/Customtypes'
import AddToCartButton from './Buttons/AddToCartButton'
import ViewProductButton from './Buttons/ViewProductButton'

type Props = {
    product: product

}

function ProductCard({ product }: Props) {


    const currency = '$'
    return (
        <div className=' p-2 w-[250px] shadow-lg rounded-sm' style={ {} }>
            <div className='w-full h-[200px]'>
                {/* image with colored blur shadow */ }
                <img className='h-full w-full' src={ "https://picsum.photos/id/" + (product.productID) + "/300/300" } />

            </div>
            <div className='flex flex-col gap-1 px-3'>
                <h2>
                    { product.productTitle }
                </h2>
                <div>
                    <StarRating rating={ product.rating } />
                </div>
                <h4>
                    <sup>  { currency } </sup>{ product.price }
                </h4>
                <ViewProductButton productID={ product.productID } />
                <AddToCartButton product={ product } />
            </div>
        </div>
    )
}

export default ProductCard