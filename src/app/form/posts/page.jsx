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
  // REDUX STATES
  const { categoriaState } = useFormCategories()
  const posteos = useSelector(state => state.firebase.posteos)
  const marcas = useSelector(state => state.firebase.marcas)

  //DISPATCH
  const dispatch = useDispatch();

  // LOCAL STATES
  const [postState, setPostState] = useState({
    available: true,
    marca: "",
    categories: "",
    description: "",
    images: [],
    title: "",
    codigo: ""
  });

  const [errors, setErrors] = useState([])

  const [isDisabled, setIsDisabled] = useState(true)

  // FUNCTIONS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const validateForm = () => {
    const validationErrors = [];

    if (postState.marca.length < 1) validationErrors.push("Seleccione una marca.");
    if (postState.title.length < 1) validationErrors.push("Agregue el titulo de la publicación.");
    if (postState.images.length < 1) validationErrors.push("No hay imagenes");

    setErrors(validationErrors);

    return validationErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log(postState)
    dispatch(postPosts(postState));
    setPostState({
      available: true,
      marca: "",
      categories: "",
      description: "",
      images: [],
      title: "",
      codigo: ""
    })
  };

  useEffect(() => {
    dispatch(getPosteos());
    dispatch(getMarcas());
  }, [dispatch]);

  useEffect(() => {
    setIsDisabled(!validateForm());
  }, [postState]);

  const handleDelete = (id) => {
    console.log("Aca esta el ", id);
    dispatch(deletePosteos(id))
  }

  const handleImages = async (files) => {
    try {
      const urls = [];
      for (const file of files) {
        const url = await uploadFile([file]); // Asumimos que uploadFile está subiendo un archivo y devolviendo una URL
        urls.push(url);
      }
      setPostState(prevState => ({
        ...prevState,
        images: [...prevState.images, ...urls] // Asegúrate de usar "images" en lugar de "image"
      }));
    } catch (error) {
      console.error(error);
      alert('Hubo un problema al subir las imágenes.');
    }
  };

  const deletePreview = (image) => {
    const borrada = postState.images.filter((urls) => urls !== image)

    setPostState({
      ...postState,
      images: borrada
    })
  }

  return (
    <div className={style.container}>
      <div className={style.containerForm}>
        <h2>
          Form Posts
        </h2>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.divForm}>
            <label htmlFor="">
              Titulo
            </label>
            <input type="text" name='title' value={postState.title} onChange={handleChange} />
          </div>
          <div className={style.divForm}>
            <label htmlFor="">
              Descripcion
            </label>
            <input type="text" name='description' value={postState.description} onChange={handleChange} />
          </div>

          <div className={style.divForm}>
            <label htmlFor="">
              Codigo
            </label>
            <input type="text" name='codigo' value={postState.codigo} onChange={handleChange} />
          </div>


          <div className={style.divForm}>
            <label htmlFor="">
              Marca
            </label>
            <select name="marca" value={postState.marca} onChange={handleChange}>
              <option value="-"> </option>
              {marcas.map((marca) => (
                <option key={marca.id} value={marca.id}>{marca.id}</option>
              ))}
            </select>
          </div>
          <div className={style.divForm}>
            <label htmlFor="">
              Categoria
            </label>
            <select name="categories" value={postState.categories} onChange={handleChange}>
              <option value="-"> </option>
              {categoriaState.map((categoria) => (
                <option key={categoria.id} value={categoria.title}>{categoria.title}</option>
              ))}
            </select>
          </div>
          <div className={style.divForm}>
            <label htmlFor="">
              Imagenes
            </label>
            <input type="file" multiple onChange={e => handleImages(e.target.files)} />
            <div className={style.imagenMuestra}>
              {postState.images.length > 0 ? postState.images.map((image, index) => (
                <div key={index} className={style.divImagenMuestra}>
                  <button type="button" onClick={() => deletePreview(image)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#d22828" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" /></svg></button>
                  <img src={image} alt={`upload-${index}`} />
                </div>
              )) : <p>No hay imágenes seleccionadas</p>}
            </div>
          </div>
          <div className={style.btnPublicar}>
            <button type='submit' className={style.publicar} disabled={isDisabled}>
              Publicar
            </button>
          </div>
          {errors.length > 0 && (
            <div className={style.errors}>
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
        </form>
      </div>
      <div className={style.containerCards}>
        {/*           <Posts/> */}
        <h2>
          Posteos
        </h2>
        <ul>
          {posteos.map(posteo => (
            <li className={style.card} key={posteo.id}>
              <div className={style.divEliminar}>
                <p onClick={() => handleDelete(posteo.id)} className={style.eliminar}>Eliminar Publicación</p>
              </div>
              <img src={posteo.imagenes/* [0] */} alt="" className={style.cardImage} />
              <Link href="/posts/[id]" as={`/posts/${posteo.id}`} key={posteo.id}>
                <p className={style.cardTitle}>{posteo.id}</p>
              </Link>
              <p className={style.cardDes}>{posteo.codigo}</p>
              <p>{posteo.categoria}</p>
              {posteo.disponible ? <p>Disponible</p> : <p>No disponible</p>}
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default PostForm

