"use client"
import React from 'react'
import Categories from './components/Categories/Categories'
import Posts from './components/Posts/page';
import style from "./page.module.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loading from './redux/actions/Loading/loading';

const page = () => {
 /*  const dispatch = useDispatch()

  const isLoading = useSelector((state) => state.loading)

  useEffect(() => {
    dispatch(loading())
  }, [])
 */
  return (
    <div className={style.container}>
      {/* {isLoading ? (
        <p>LOADINGGGG</p>
      ) : ( */}
        <>
          <div className={style.categories}>
            <Categories />
          </div>

          <div className={style.posts}>
            <Posts />
          </div>
        </>
    {/*   )} */}
    </div>
  )
}

export default page