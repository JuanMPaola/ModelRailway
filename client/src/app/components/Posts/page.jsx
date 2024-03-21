"use client"

import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getPosteos from '../../redux/actions/Posts/getPosteos'
import filterCategories from "../../redux/actions/Filter/filterCategories"

function Posts() {
  const dispatch = useDispatch();

  const posteos = useSelector(state => state.firebase.posteos)
  const categories = useSelector(state => state.firebase.categories);
  const [selectedCategory, setSelectedCategory] = useState("");
  /*   console.log("posteitos", posteos)
    console.log("categoritas", categories) */


  useEffect(() => {
    dispatch(getPosteos())
  }, [dispatch])

  const handleFilter = (category) => {
    setSelectedCategory(category)
    dispatch(filterCategories(category));
  }

  return (
    <>
      <h2>Publicaciones</h2>
      <div>
        <h3>Filtrar por Categoria:</h3>
        <select value={selectedCategory} onChange={(e) => handleFilter(e.target.value)}>
          <option value="Todas">Todas</option>
          {categories.map(category => (
            <option key={category.id} value={category.title}>{category.title}</option>
          ))}
        </select>
      </div>

      <div>
        <ul>
          {posteos.map(posteo => (
              <li>
                <p>Available: {posteo.available}</p>
                <p>Categorias: {posteo.categories}</p>
                <p>Descripcion: {posteo.description}</p>
                <p>id: {posteo.id}</p>
                <p>Imagen: {posteo.image}</p>
                <p>Titulo: {posteo.title}</p>
              </li>
          ))}
        </ul>
      </div>
    </>

  )
}

export default Posts
