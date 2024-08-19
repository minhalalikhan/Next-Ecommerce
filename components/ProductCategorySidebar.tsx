"use client"
import React from 'react'
import { getCategories } from '@/lib/backend'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { ChangeCategory } from '@/store/Features/ProductsSlice'
import { product } from '@/Customtypes'


type Props = {}

function ProductCategorySidebar({ }: Props) {

    const CategoryList: string[] = getCategories()
    const ActiveCategory = useSelector((state: RootState) => state.Products.ActiveCategory)
    const Dispatch = useDispatch()
    function changeCategory(category: string) {
        Dispatch(ChangeCategory(category))
    }
    return (
        <div className='w-[250px] flex flex-col gap-2 rounded-md overflow-hidden'>
            <div className='bg-black text-white p-3 font-semibold'>
                Categories
            </div>
            <div className='w-full flex flex-col gap-1'>
                <div
                    onClick={ () => changeCategory('') }
                    className={ `cursor-pointer border-b-2 py-2 px-1 ${ActiveCategory === "" ? 'bg-slate-200' : ' hover:bg-slate-100'}` }>
                    All
                </div>
                { CategoryList.map((item, i) => {
                    return (<div
                        key={ i }
                        className={ `cursor-pointer border-b-2 py-2 px-1 ${ActiveCategory === item ? 'bg-slate-200' : ' hover:bg-slate-100'}` }
                        onClick={ () => changeCategory(item) }
                    >
                        { item }
                    </div>)
                }) }
            </div>
        </div>
    )
}

export default ProductCategorySidebar