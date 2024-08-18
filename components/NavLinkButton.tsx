import Link from 'next/link'

type Props = {
    text: string,
    route: string
}

export default function NavLinkButton({ text, route }: Props) {
    return (
        <Link href={ route } className=''>
            { text }
        </Link>
    )
}