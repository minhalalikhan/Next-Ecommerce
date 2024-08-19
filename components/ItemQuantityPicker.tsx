"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { } from '@/store/Features/CartSlice'

type Props = {
    ProductID: number
}

function ItemQuantityPicker({ ProductID }: Props) {


    return (
        <div className='flex flex-row p-2'>
            <button>
                +
            </button>
            <div></div>
            <button>
                1
            </button>
        </div>

    )
}

export default ItemQuantityPicker