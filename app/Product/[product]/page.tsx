import React from 'react'

type Props = {
    params: {
        product: string
    }
}

function product({ params }: Props) {
    return (
        <div>
            product page :
            { params.product }

        </div>
    )
}

export default product