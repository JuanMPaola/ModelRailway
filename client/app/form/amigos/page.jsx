import React from 'react'
import Link from 'next/link'

function formAmigos() {
    return (
        <div>
            <h1>Form Amigos</h1>

            <Link href="/form">Categorias</Link>

            <br></br>

            <Link href="/form/posts">Posts</Link>

            <br></br>
            <br></br>

            <form>
                <label>Imagenes</label>
                <input></input>

                <br></br>

                <label>Texto</label>
                <input></input>
            </form>
        </div>
    )
}

export default formAmigos