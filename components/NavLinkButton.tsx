import Link from 'next/link'

type Props = {
    children: React.ReactNode
    route: string
}

export default function NavLinkButton({ children, route }: Props) {
    return (
        <Link href={ route } className=''>
            { children }
        </Link>
    )
}