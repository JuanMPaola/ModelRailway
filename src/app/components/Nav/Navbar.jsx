import Link from 'next/link'
import style from "./Navbar.module.css"
import lineasNav from "../../../../public/assets/lineasNav.png"

function Navbar() {
    return (
        <>
            <nav className={style.container}>
                <h1>Trenes de Adrian</h1>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">Acerca de</Link>
                    </li>
                    <li>
                        <Link href="/amigos">Amigos</Link>
                    </li>
                </ul>
            </nav>
        </>

    )
}

export default Navbar