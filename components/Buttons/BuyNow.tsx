import React from 'react'
import Button from './Button'

type Props = {}

function BuyNow({ }: Props) {

    function buyNow() {

    }

    return (
        <Button Text='Buy Now' onclick={ buyNow } />
    )
}

export default BuyNow