"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { NextPage, PreviousPage } from '@/store/Features/ProductsSlice'

type Props = {}

function Pagination({ }: Props) {
    const Page = useSelector((state: RootState) => state.Products.page)
    const TotalPages = useSelector((state: RootState) => state.Products.TotalPages)
    const Dispatch = useDispatch()

    return (
        <div className='w-full  flex flex-row p-2  justify-end items-center gap-3 border-t-2'>
            <Button Text='<' onClick={ () => Dispatch(PreviousPage()) }
                disable={ Page === 1 }
            />
            <p>{ Page }</p>
            <Button Text='>' onClick={ () => Dispatch(NextPage()) }
                disable={ Page === TotalPages }
            />

        </div>
    )
}

type BUttonProps = {
    Text: string,
    onClick?: () => void,
    disable?: boolean
}

function Button({ Text = '', onClick, disable = false }: BUttonProps) {
    if (disable)
        return <div
            className=' bg-gray-600 text-white py-1 px-2 rounded-md flex justify-center'>
            { Text }
        </div>

    return <div

        onClick={ onClick } className='cursor-pointer bg-black text-white py-1 px-2 rounded-md flex justify-center'>
        { Text }
    </div>
}

export default Pagination