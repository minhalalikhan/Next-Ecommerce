import React from 'react'
import NavLinkButton from './NavLinkButton'
import CartNavlink from './Buttons/CartNavlink'

type Props = {}

function Navbar({ }: Props) {
    return (
        <div className='w-full shadow-sm shadow-slate-700 flex flex-row justify-between py-2 px-3 items-center'>
            <h1 className='text-lg font-bold'>ShopX</h1>
            <div className='flex flex-row justify-between px-1 gap-2 pr-2'>
                {/* <NavLinkButton text='Cart' route='/Cart' /> */ }
                <CartNavlink />
                {/* <NavLinkButton text='Profile' route='/Profile' /> */ }


            </div>
        </div>
    )
}

export default Navbar