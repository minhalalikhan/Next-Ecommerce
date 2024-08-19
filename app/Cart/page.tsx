"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import Image from 'next/image'
import { CartItem } from '@/Customtypes'
import StarRating from '@/components/StarRating'
import ItemQuantityPicker from '@/components/ItemQuantityPicker'


type Props = {}

export default function Cart({ }: Props) {

    const CartItems = useSelector((state: RootState) => state.Cart.Items)
    const Dispatch = useDispatch()

    return (
        <div className="flex  flex-col w-full gap-2 p-3">
            <h2>My Cart</h2>
            {/* Show list of Items */ }
            <div className='flex  flex-col w-full gap-1  border-t-2'>
                { CartItems.map((item, i) => {
                    return <CartItemCard key={ i } CartItem={ item } />
                }) }
            </div>
            {/* show total and discount */ }
            <div className='flex flex-row justify-end'>
                <p>Subtotal : { }</p>
            </div>
            {/* Checkout or Continue Shopping */ }
            <div>
            </div>
            {/*  */ }
        </div>
    )
}

type CartProp = {
    CartItem: CartItem
}
function CartItemCard({ CartItem }: CartProp) {

    const Product = CartItem.product

    return <div className='flex flex-row justify-between p-2 border-b-2'>
        <Image
            alt=''

            width={ 300 }
            height={ 200 }
            src={ "https://picsum.photos/id/" + (Product.productID) + "/300/300" }
        />
        <div className='flex flex-col '>
            <h2>{ Product.productTitle }</h2>
            <h4>{ Product.description }</h4>
            <h4>Seller : { Product.seller }</h4>
            <StarRating rating={ Product.rating } />
        </div>
        <div className='flex flex-col gap-1'>
            {/* Price per Item  */ }
            <h4>Price : { Product.price }</h4>
            {/* Quantity picker */ }
            <div className='flex flex-row'>
                <ItemQuantityPicker ProductID={ Product.productID } />
            </div>
            {/* Subtotal  */ }
            <div>

            </div>
        </div>
    </div>
}