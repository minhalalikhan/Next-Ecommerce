import React from 'react'
import Image from 'next/image'
type Props = {}

function Banner({ }: Props) {
    return (
        <div className='w-full h-[200px] flex justify-center items-center '>
            <Image
                src="/Banner.png"
                width={ 800 }
                height={ 500 }
                alt="Banner"
            />

        </div>
    )
}

export default Banner