"use client"

import React from 'react'
import Link from 'next/link'

function handleSumbit(event){
  event.preventDefault();
  console.log("Sumbited");
}

function Form() {
  return (
    <div>
      <h1>Form Categorias</h1>

      <Link href="/form/posts">Posts</Link>

      <br></br>

      <Link href="/form/amigos">Amigos</Link>

      <br></br>
      <br></br>

      <form>

        <label>Nombre</label>
        <input></input>

        <button type='sumbit' onClick={handleSumbit}>Sumbit</button>

        <br></br>
        <p>Aca se va a renderizar una lista de las categorias que ya existen.</p>
        <p>Se le podria agregar a cada categoria existente una cruz que permita eliminarla.</p>

      </form>




    </div>
  )
}

export default Form