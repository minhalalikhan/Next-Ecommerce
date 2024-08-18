"use client";
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

type Props = {}

function ProductFilterTopbar({ }: Props) {

    const ActiveCategory = useSelector((state: RootState) => state.Products.ActiveCategory)

    return (
        <div className='w-full rounded-sm bg-slate-200 p-3'>{ `Products > ${ActiveCategory === '' ? 'All' : ActiveCategory}` }</div>
    )
}

export default ProductFilterTopbar