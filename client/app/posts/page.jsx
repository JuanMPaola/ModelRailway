import React from 'react'

async function fetchPosts() {
  const res = await fetch ("http://localhost:3001/posts");
  const data = await res.json();
  return data;

}


async function posts() {
  const posts = await fetchPosts();
  console.log(posts)

  return (
    <div>
        <h1>Posts</h1>

        <ul>
          {
            posts.map(post =>(
              <li key={post.id}>
                <div>

                 <h5>{post.title}</h5>
                 <p>{post.description}</p>

                </div>
              </li>
            )
              
            )
          }
        </ul>
    </div>
  )
}

export default posts
