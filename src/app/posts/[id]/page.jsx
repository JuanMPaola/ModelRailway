'use client'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getById, isLoading } from '../../redux/actions';
import style from './page.module.css';

function Detail({ params }) {
  const dispatch = useDispatch();

  const id = params.id.replace(/%20/g, ' '); 

  

  const post = useSelector(state => state.firebase.postId);
  const startLoading = useSelector(state => state.firebase.loading);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const toggleImagen = (index) => {
    setMainImageIndex(index);
  };

  useEffect(() => {
    dispatch(isLoading());
    dispatch(getById(id));
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <div className={style.mainImage}>
          <img src={post.imagenes && post.imagenes[mainImageIndex]} alt="" className={style.imagen} />
        </div>
        <div className={style.imagenesSecundarias}>
          {post.imagenes && post.imagenes.map((imagen, index) => (
            index !== mainImageIndex && (
              <div key={index}>
                <img
                  src={imagen}
                  alt=""
                  className={style.imagenSecundaria}
                  onClick={() => toggleImagen(index)}
                />
              </div>
            )
          ))}
        </div>
      </div>
      <div className={style.containerDetail}>
        <div>
          <p>id: {id}</p>
          <p>categoria: {post.categoria}</p>
          <p>descripcion: {post.descripcion}</p>
          <p>disponible: {post.disponible}</p>
          <p>marca: {post.marca}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;

