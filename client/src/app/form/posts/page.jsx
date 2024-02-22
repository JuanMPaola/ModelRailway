import React from 'react'
import Link from 'next/link'



function postForm() {
  return (
    <div>
      <h1>Form Posts</h1>
      <Link href="/form">Categorias</Link>

      <br></br>

      <Link href="/form/amigos">Amigos</Link>

      <br></br>
      <br></br>

      <form>
        <label>Titulo</label>
        <input></input>
        
        <br></br>

        <label>Descripcion</label>
        <input></input>

        <br></br>

        <label>Imagenes</label>
        <input></input>

        <button>sumbit</button>
      </form>

    </div>
  )
}

export default postForm