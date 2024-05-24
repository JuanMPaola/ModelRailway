"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postPosts, getPosteos, deletePosteos, getMarcas } from '../../redux/actions'
import useFormCategories from '../categories/hooks/useFormCategories'
import Posts from '../../components/Posts/page'
import style from "./page.module.css"
import { uploadFile } from '@/src/firebase'

function postForm() {
  const { categoriaState } = useFormCategories()
  console.log("categorias desde post", categoriaState)
  const posteos = useSelector(state => state.firebase.posteos)
  const marcas = useSelector(state => state.firebase.marcas)
  console.log(marcas, "Aca estan las marcas")

  const [postState, setPostState] = useState({
    available: true,
    marca: "",
    categories: "",
    description: "",
    images: [], 
    title: "",
  });
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPosts(postState))
  }

  useEffect(() => {
    dispatch(getPosteos())
    dispatch(getMarcas())
  }, [dispatch])

  const handleDelete = (id) => {
    console.log("Aca esta el ", id);
    dispatch(deletePosteos(id))
  }

  const handleImages = async (files) => {
    try {
      const urls = [];
      for (const file of files) {
        const url = await uploadFile([file]);
        urls.push(url);
      }
      setPostState(prevState => ({
        ...prevState,
        image: [...prevState.images, ...urls] // Update the state with an array of URLs
      }));
    } catch (error) {
      console.error(error);
      alert('Hubo un problema al subir las imagenes.');
    }
  }

  return (
    <div>
      <h1>Form Posts</h1>
      <Link href="/form">Categorias</Link>
      <br /><br />
{/*       <Link href="/form/amigos">Amigos</Link> */}
      <br /><br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Titulo</label>
        <input type="text" name='title' value={postState.title} onChange={handleChange} />

        <br /><br />

        <label htmlFor="">Descripcion</label>
        <input type="text" name='description' value={postState.description} onChange={handleChange} />

        <br /><br />

        <label htmlFor="">Marca</label>
        <select name="marca" value={postState.marca} onChange={handleChange}>
          <option value="-"> </option>
          {marcas.map((marca) => (
            <option key={marca.id} value={marca.id}>{marca.id}</option>
          ))}
        </select>

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
        <input type="file" multiple onChange={e => handleImages(e.target.files)} />

        <br /><br />

        <button type='submit'>Submit</button>
      </form>

      <br></br>

      <h2>Posteos</h2>



      <div className={style.containerCards}>
{/*           <Posts/> */}
          <ul>
              {posteos.map(posteo => (
                <li className={style.card} key={posteo.id}>
                  <button onClick={() => handleDelete(posteo.id)}>X</button>
                  <img src={posteo.imagenes/* [0] */} alt="" className={style.cardImage} />
                  <Link href="/posts/[id]" as={`/posts/${posteo.id}`} key={posteo.id}>
                    <p className={style.cardTitle}>{posteo.id}</p>
                  </Link>
                  <p className={style.cardDes}>{posteo.descripcion}</p>
                  <p>{posteo.disponible}</p>
                  <p>{posteo.categoria}</p>
                </li>
              ))}
            </ul>

      </div>
    </div>
  )
}

export default postForm