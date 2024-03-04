"use client"

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, postCategories, deleteCategories } from '../redux/actions';
import Link from 'next/link'


function Form() {
  const [categorias, setCategorias] = useState("");

  const dispatch = useDispatch();
  const categoriaState = useSelector(state => state.firebase.categories)
  console.log(categoriaState)
  useEffect(() =>{
    dispatch(getCategories())
  },[dispatch])
  
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(postCategories(categorias)).then(() => {
      // Actualizar el estado localmente después de agregar una nueva categoría
      setCategorias("");
      dispatch(getCategories()); // Actualizar la lista de categorías desde el servidor
    });
  }

  const handleChange = (e) =>{
    setCategorias(e.target.value)
  }

  const handleDelete = (id) =>{
    console.log("Aca esta el ", id);
    dispatch(deleteCategories(id))
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
          {Array.isArray(categoriaState) && categoriaState.map((categoria) =>(
            <div key={categoria.id}>
              <h2 >{categoria.Title}</h2>
              <button onClick={() => handleDelete(categoria.id)}>Delete</button>
            </div>
          ))}
        </div>
        <p>Se le podria agregar a cada categoria existente una cruz que permita eliminarla.</p>
    </div>
  )
}

export default Form