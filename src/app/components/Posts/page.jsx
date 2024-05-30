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
          {posteos.length === 0 ? (
            <>
              <div className={style.noHayPosteos}>
                  <p>No hay ningúna publicación</p>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 20 20"><g fill="black"><path fill-rule="evenodd" d="M17.5 5a4 4 0 0 0-4-4h-7a4 4 0 0 0-4 4v6.99a4 4 0 0 0 2.814 3.82c1.558.483 3.121.726 4.686.726s3.128-.243 4.686-.727a4 4 0 0 0 2.814-3.82zm-13 6.99V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6.99a2 2 0 0 1-1.407 1.91a13.733 13.733 0 0 1-4.093.636a13.73 13.73 0 0 1-4.093-.637A2 2 0 0 1 4.5 11.99" clip-rule="evenodd"/><path d="M8 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M4.581 15.147a1 1 0 1 1 1.841.781l-1.475 3.475a1 1 0 1 1-1.84-.781zm10.887-.494a1 1 0 0 0-1.876.694l1.47 3.97a1 1 0 0 0 1.876-.694z"/><path fill-rule="evenodd" d="M15 6a2.5 2.5 0 0 0-2.5-2.5h-5A2.5 2.5 0 0 0 5 6v1.535a2.5 2.5 0 0 0 2.076 2.463c.974.168 1.949.252 2.924.252c.975 0 1.95-.084 2.924-.252A2.5 2.5 0 0 0 15 7.535zM7 7.535V6a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1.535a.5.5 0 0 1-.415.492a15.161 15.161 0 0 1-5.17 0A.5.5 0 0 1 7 7.535" clip-rule="evenodd"/><path d="M4.75 18.25v-1.5h10.501v1.5zM1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"/></g></svg></p>
              </div>
            </>
          ) : (
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
          )}
          </>
        )}
      </div>
    </div>
  )
}

export default Posts

