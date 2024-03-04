"use client"

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, postCategories, deleteCategories } from '../../redux/actions';
import useFormCategories from './hooks/useFormCategories';
import Link from 'next/link'


function FormCategories() {
  const {categorias, handleChange, handleSumbit, categoriaState, handleDelete, listCategories} = useFormCategories()
  console.log("-------> listCategories", listCategories);
  return (
    <div>
      <h1>Form Categorias</h1>

      <Link href="/form/posts">Posts</Link>

      <br></br>

      <Link href="/form/amigos">Amigos</Link>

      <br></br>
      <br></br>
    
      <form onSubmit={handleSumbit}>

        <label>Nombre</label>
        <input type="text" value={categorias} onChange={(e) => handleChange(e)} />

        <button type='sumbit'>Enviar Name</button>

      </form>
        <br></br>
        <p>Aca se va a renderizar una lista de las categorias que ya existen.</p>

        <div>
          {listCategories.map((categoria) => (
           categoria.id && <div style={{background: "red"}} key={categoria.id}>
              <h2 >{categoria.title}</h2>
              <button onClick={() => handleDelete(categoria.id)}>Delete{categoria.id}</button>
              <h2 >{categoria.id}</h2>
            </div>
          ))}
        </div>
        <p>Se le podria agregar a cada categoria existente una cruz que permita eliminarla.</p>
    </div>
  )
}

export default FormCategories