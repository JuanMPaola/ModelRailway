"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postPosts, getPosteos, deletePosteos, getMarcas } from '../../redux/actions'
import useFormCategories from '../categories/hooks/useFormCategories'
import style from "./page.module.css"
import { uploadFile } from '@/src/firebase'

function PostForm() {
  const { categoriaState } = useFormCategories()
  const posteos = useSelector(state => state.firebase.posteos)
  const marcas = useSelector(state => state.firebase.marcas)

  const [postState, setPostState] = useState({
    available: true,
    marca: "",
    categories: "",
    description: "",
    images: [],
    title: "",
  });

  const [errors, setErrors] = useState([])

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    setErrors([]);
    const validationErros = [];

    if (postState.marca.length < 1) validationErros.push("Seleccione una marca.")
    
    if (postState.title.length < 1) validationErros.push("Agregue el titulo de la publicación.")

    if(postState.images.length < 1) validationErros.push("No hay imagenes")

    if (validationErros.length > 0) {
      setErrors(validationErros)
      return;
    }

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
    <div className={style.container}>
      <div className={style.containerForm}>
        <h2>Form Posts</h2>
        <form onSubmit={handleSubmit} className={style.form}>
          <div>
            <label htmlFor="">Titulo</label>
            <input type="text" name='title' value={postState.title} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Descripcion</label>
            <input type="text" name='description' value={postState.description} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Marca</label>
            <select name="marca" value={postState.marca} onChange={handleChange}>
              <option value="-"> </option>
              {marcas.map((marca) => (
                <option key={marca.id} value={marca.id}>{marca.id}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Categoria</label>
            <select name="categories" value={postState.categories} onChange={handleChange}>
              <option value="-"> </option>
              {categoriaState.map((categoria) => (
                <option key={categoria.id} value={categoria.title}>{categoria.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Imagenes</label>
            <input type="file" multiple onChange={e => handleImages(e.target.files)} />
            <div>
              {postState.images.length > 0 ? postState.images.map((image, index) => (
                <img key={index} src={image} alt={`upload-${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }} />
              )) : <p>No hay imágenes seleccionadas</p>}
            </div>
          </div>
          <div className={style.btnPublicar}>
            <button type='submit' className={style.publicar}>Publicar</button>
          </div>
        </form>
      </div>
      <div className={style.containerCards}>
        {/*           <Posts/> */}
        <h2>Posteos</h2>
        <ul>
          {posteos.map(posteo => (
            <li className={style.card} key={posteo.id}>
              <div className={style.divEliminar}>
                <p onClick={() => handleDelete(posteo.id)} className={style.eliminar}>Eliminar</p>
              </div>
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

export default PostForm

