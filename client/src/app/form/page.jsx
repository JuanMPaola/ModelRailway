"use client"

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, postCategories } from '../redux/actions';
import Link from 'next/link'


function Form() {
  
  const [categorias, setCategorias] = useState("");

  const dispatch = useDispatch();
  const categoriaState = useSelector(state => state.firebase.categories)

  useEffect(() =>{
    dispatch(getCategories())
  },[dispatch])
  
  console.log("aca estan las categorias", categoriaState)
  
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(postCategories(categorias))
    setCategorias("")
  }

  const handleChange = (e) =>{
    setCategorias(e.target.value)
  }

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
        <input type="text" value={categorias} onChange={handleChange} />

        <button type='sumbit'>Sumbit</button>

        </form>
        <br></br>
        <p>Aca se va a renderizar una lista de las categorias que ya existen.</p>

        <div>
          {Array.isArray(categoriaState) && categoriaState.map((categoria, index) =>(
            <div>
              <h2 key={index}>{categoria.Title}</h2>
            </div>
          ))}
        </div>
        <p>Se le podria agregar a cada categoria existente una cruz que permita eliminarla.</p>





    </div>
  )
}

export default Form