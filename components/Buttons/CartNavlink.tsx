'use client';
import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";
import { Cart } from '@/Customtypes';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';


type Props = {}

async function CartNavlink({ }: Props) {

    const count = useSelector((state: RootState) => state.Cart.Total_count)


    return (
        <Link href={ '/Cart' } className=''>
            <div className='relative inline-block'>
                <FaShoppingCart className='text-lg' />
                { count > 0 && <div className=' rounded-[50%] bg-red-600 flex justify-center items-center  text-xs h-4 w-4 text-white absolute top-[-40%] right-[-40%]'>
                    { count }
                </div> }
            </div>
        </Link>
    )
}

export default CartNavlink