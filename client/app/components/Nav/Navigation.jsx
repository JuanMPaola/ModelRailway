import Link from 'next/link'

function Navigation() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Propuesta</Link>
                </li>
                <li>
                    <Link href="/amigos">Amigos</Link>
                </li>
            </ul>
            <Link href="/form">Form</Link>
        </>

    )
}

export default Navigation