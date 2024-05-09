import Link from 'next/link'
import style from "./Navbar.module.css"
/* import lineasNav from "../../../../public/assets/lineasNav.png"
import Linea from "../../../../public/Lineas.svg" */


function Navbar() {
    return (
        <>
            <nav className={style.container}>
                {/* <div className={style.logo}>
                    <p>🚆</p>
                </div> */}

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
            </nav>
        </>

    )
}

export default Navbar