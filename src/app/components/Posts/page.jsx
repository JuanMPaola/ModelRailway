"use client"

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getPosteos from '../../redux/actions/Posts/getPosteos'
import isLoading from '../../redux/actions/Loading/loading'; // Importando la acción isLoading
import style from "./page.module.css"
import Link from 'next/link';

function Posts() {
  const dispatch = useDispatch();

  const posteos = useSelector(state => state.firebase.posteos)
  const startLoading = useSelector(state => state.firebase.loading) // Accediendo al estado de carga desde firebase.loading

  useEffect(() => {
    dispatch(isLoading())
    dispatch(getPosteos())
  }, [dispatch])

  return (
    <div className={style.container}>
      <div className={style.containerCard}>
        {startLoading ? (
          <div className={style.spinner}></div>
        ) : (
          <>
            <ul>
              {posteos.map(posteo => (
                <li className={style.card} key={posteo.id}>
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
          </>
        )}
      </div>
    </div>
  )
}

export default Posts

