"use client"
import {React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getAmigos from '../redux/actions/Amigos/getAmigos'

function Amigos() {
  const dispatch = useDispatch();
  const getPostAmigos = useSelector(state => state.firebase.amigos)
  console.log("amigos", getPostAmigos)

  useEffect(() =>{
      dispatch(getAmigos())
  }, [dispatch])
  return (
    <div>
        <h2>Amigos</h2>
        <ul>
        {getPostAmigos.map(amigo => (
            <li>
              <p>Descripcion: {amigo.description}</p>
              <p>Imagen: {amigo.image}</p>
            </li>
          ))}
        </ul>
        <li></li>
    </div>
  )
}

export default Amigos