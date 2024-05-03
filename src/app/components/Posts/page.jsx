"use client"

import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getPosteos from '../../redux/actions/Posts/getPosteos'
import style from "./page.module.css"

function Posts() {
  const dispatch = useDispatch();

  const posteos = useSelector(state => state.firebase.posteos)

  useEffect(() => {
    dispatch(getPosteos())
  }, [dispatch])

  return (
    <div className={style.container}>
      <div className={style.containerCard}>
        <ul>
          {posteos.map(posteo => (
            <li className={style.card} key={posteo.id}>
              <img src={posteo.imagenes[0]} alt="" className={style.cardImage} />
              <p className={style.cardTitle}>{posteo.id}</p>
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

export default Posts
