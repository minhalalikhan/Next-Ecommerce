import { Rating } from '@/Customtypes';
import { isRating } from '@/TypeGuard';
import React from 'react'
import { FaStar } from "react-icons/fa";

type Props = { rating: number }

function StarRating({ rating }: Props) {
    if (isRating(rating)) {
        return (
            <div className='flex flex-row gap-[2px] items-center'>
                { Array(rating).fill(0).map((item, i) => {
                    return (
                        <div key={ i }><FaStar className='text-amber-500' /></div>
                    )
                }) }
            </div>
        )
    }

}

export default StarRating