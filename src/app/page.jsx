import React from 'react'
import Categories from './components/Categories/Categories'
import Posts from './components/Posts/page';
import style from "./page.module.css"

const  page = () => {

 return (
    <div className={style.container}>
      <div className={style.categories}>
        <Categories/>
      </div>

      <div className={style.posts}>
        <Posts/>
      </div>
    </div>
  )
}

export default page