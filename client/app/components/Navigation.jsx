import Link from 'next/link'

function Navigation() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/form">Form</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/posts">Posts</Link>
            </li>
        </ul>
    )
}

export default Navigation