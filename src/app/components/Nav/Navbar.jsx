"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import style from "./Navbar.module.css"



function Navbar() {
    const pathname = usePathname();

    return (
        <>
            <nav className={style.container}>
                <div className={style.none}>
                   {/*  <img src="/assets/logo2.jpg" alt="Logo" /> */}
                    <img src="/assets/lineasNav.png" alt="" />
                </div>

                <div className={style.titulo}>
                    <div className={style.containerTitulo}>
                        <h1>TRENES DE ADRIAN</h1>
                    </div>
                    <ul>
                        {pathname !== '/' && (
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                        )}
                        {pathname !== '/about' && (
                            <li>
                                <Link href="/about">Acerca de</Link>
                            </li>
                        )}
{/*                         <li>
                            <Link href="">Amigos</Link>
                        </li> */}
                        <li><Link href="/form">Form</Link></li>
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