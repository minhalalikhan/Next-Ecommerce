"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'


type Props = {}

export default function Cart({ }: Props) {

    const CartItems = useSelector((state: RootState) => state.Cart.Items)
    const Dispatch = useDispatch()

    return (
        <div className="flex  flex-col w-full gap-2 p-3">
            <h2>My Cart</h2>
            {/* Show list of Items */ }
            <div className='flex  flex-col w-full gap-1  border-t-2'>
                { CartItems.map((items, i) => {
                    return <>
                    </>
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
    CartItem: {
        product: Object,
        count: number
    }
}
function CartItemCard({ CartItem }: CartProp) {

    return <div>
        { CartItem.count }
    </div>
}