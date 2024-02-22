import React from 'react'
import Categoris from './components/Categoris/Categoris'
import Posts from './components/Posts/page';

async function fetchPosts() {
  const res = await fetch("http://localhost:3001/posts");
  const data = await res.json();
  return data;

}

async function fetchCategoris() {
  const res = await fetch("http://localhost:3001/categoris");
  const data = await res.json();
  return data;

}

async function IndexPage() {
  const posts = await fetchPosts();
  const categoris = await fetchCategoris();


  return (
    <>
      <h1>Posts</h1>
      <div>
        <Categoris categoris={categoris} />
      </div>

      <div>
        <Posts posts={posts}/>
      </div>
    </>
  )
}

export default IndexPage