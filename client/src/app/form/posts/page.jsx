"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postPosts, getPosteos, deletePosteos } from '../../redux/actions'
import useFormCategories from '../categories/hooks/useFormCategories'


function postForm() {
  const {categoriaState} = useFormCategories()
  console.log("categorias desde post", categoriaState)
  const posteos = useSelector(state => state.firebase.posteos)
  const [postState, setPostState] = useState({
    available: true,
    categories:"",
    description:"",
    image:"",
    title:"",
  })
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setPostState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(postPosts(postState))
  }

  useEffect(() =>{
    dispatch(getPosteos())
  }, [dispatch])

  const handleDelete = (id) =>{
    console.log("Aca esta el ", id);
    dispatch(deletePosteos(id))
  }


  return (
    <div>
      <h1>Form Posts</h1>
      <Link href="/form">Categorias</Link>
      <br /><br />
      <Link href="/form/amigos">Amigos</Link>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Titulo</label>
        <input type="text" name='title' value={postState.title} onChange={handleChange}/>

        <br /><br />

        <label htmlFor="">Descripcion</label>
        <input type="text" name='description' value={postState.description} onChange={handleChange}/>

        <br /><br />

        <label htmlFor="">Categoria</label>
        <select name="categories" value={postState.categories} onChange={handleChange}>
          <option value="-"> </option>
          {categoriaState.map((categoria) => (
            <option key={categoria.id} value={categoria.title}>{categoria.title}</option>
          ))}
        </select>

        <br /><br />

        <label htmlFor="">Imagenes</label>
        <input type="text" name='image' value={postState.image} onChange={handleChange}/>
        
        <br /><br />

        <button type='submit'>Submit</button>
      </form>
      
      <br></br>

      <h2>Posteos</h2>

      <div>
      <ul>
          {posteos.map(posteo => (
            <>
            <li>
              <p>Available: {posteo.available}</p>
              <p>Categorias: {posteo.categories}</p>
              <p>Descripcion: {posteo.description}</p>
              <p>id: {posteo.id}</p>
              <p>Imagen: {posteo.image}</p>
              <p>Titulo: {posteo.title}</p>
            </li>
            <button onClick={() => handleDelete(posteo.id)}>Delete{posteo.id}</button>
            </>
          ))}
        </ul>


      </div>
    </div>
  )
}

export default postForm