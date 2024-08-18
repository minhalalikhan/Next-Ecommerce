import React from 'react'
import Button from './Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
type Props = {
    productID: number
}

function ViewProductButton({ productID }: Props) {
    // const router = useRouter()

    return (
        <Link href={ '/Product/' + productID }>
            <Button Text='View Product'
                // onclick={ () => router.push('/Product/' + productID) }
                className='border-black  border-2 rounded-md hover:cursor-pointer hover:bg-slate-100
            ' />
        </Link>
    )
}

export default ViewProductButton