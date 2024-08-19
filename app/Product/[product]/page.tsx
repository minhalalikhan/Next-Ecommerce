import { getProductDetails } from '@/lib/backend'
import React from 'react'
import Image from 'next/image'
import StarRating from '@/components/StarRating'

type Props = {
    params: {
        product: string
    }
}

function product({ params }: Props) {

    if (!Number.isInteger(parseInt(params.product)))
        return (<></>)

    const Product = getProductDetails(parseInt(params.product))
    console.log(Product)

    if (!Product)
        return (<div>No DATA FOUND</div>)

    return (
        <div className='flex flex-col gap-2'>
            {/* prodcut details */ }
            <div className='flex flex-row w-full h-[70vh] items-center '>
                <div className='flex flex-row w-full pt-6 items-start h-[300px]'>

                    <Image
                        alt=''
                        width={ 300 }
                        height={ 200 }
                        src={ "https://picsum.photos/id/" + (Product.productID) + "/300/300" }
                    />
                    <div className='flex flex-col px-4 justify-between h-full'>
                        <div>

                            <h2 className='text-xl font-bold'>{ Product.productTitle }</h2>
                            <h4 className='italic text-gray-600'>Seller : { Product.seller }</h4>
                            <h4>{ Product.description }</h4>
                            <StarRating rating={ Product.rating } />
                        </div>
                        <div >
                            Quantity picker
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Suggestions */ }
            <div className='flex flex-row w-full p-2 overflow-x-auto'>

            </div>
            {/* Product Reviews */ }

        </div>
    )
}

export default product