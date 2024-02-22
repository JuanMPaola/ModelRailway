import React from 'react'
import Categories from './components/Categories/Categories'
import Posts from './components/Posts/page';


const  page = () => {

  return (
    <>
      <h1>Posts</h1>
      <div>
        <Categories/>
      </div>

      <div>
        <Posts/>
      </div>
    </>
  )
}

export default page