"use client"

import {React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getPosteos from '../../redux/actions/Posts/getPosteos'


function Posts() {
  const dispatch = useDispatch();
  
  const posteos = useSelector(state => state.firebase.posteos)
  console.log("posteitos", posteos)

  useEffect(() =>{
    dispatch(getPosteos())
  }, [])
  
  return (
    <>
        <h2>Publicaciones</h2>

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
    </>

  )
}

export default Posts
