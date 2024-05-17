"use client"
import Link from 'next/link'
import style from "./Navbar.module.css"



function Navbar() {
    return (
        <>
            <nav className={style.container}>
                <div className={style.imageNav}>
                    <img src="/assets/logo2.jpg" alt="Logo" />
                </div>

                <div className={style.titulo}>
                    <div className={style.containerTitulo}>
                        <h1>TRENES DE ADRIAN</h1>
                    </div>
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
                </div>
                <div className={style.none}>
                    {/* <p>none</p> */}
                    <img src="/assets/lineasNav.png" alt="" />
                    
                </div>
            </nav>
        </>

    )
}

export default Navbar