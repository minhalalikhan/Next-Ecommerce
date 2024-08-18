"use client"
import React from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'

import { Additem, RemoveItem } from '@/store/Features/CartSlice'
import { product } from '@/Customtypes'
type Props = {
    product: product
}

function AddToCartButton({ product }: Props) {

    const Items = useSelector((state: RootState) => state.Cart.Items)
    const isAdded = Items.some((item) => item.product.productID === product.productID)
    const Dispatch = useDispatch()

    if (isAdded)
        return (
            <Button Text={ 'Remove from Cart' }
                onclick={ () => Dispatch(RemoveItem({ product: product, count: 1 })) }
                className='border-black  text-red-800 border-2 rounded-md hover:cursor-pointer hover:bg-slate-100
        ' />
        )

    return (
        <Button Text='Add to Cart'
            onclick={ () => Dispatch(Additem({ product: product, count: 1 })) }
            className='border-black bg-black text-white border-2 rounded-md hover:cursor-pointer hover:bg-slate-600
        ' />
    )
}

export default AddToCartButton