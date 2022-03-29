import React from 'react'
import './Post.css';
function Posts({loading, posts}) {
    if(loading) {
        return <h1>Loading...</h1>
    }
  return (
   <ul className='list-group mb-4'>
        {posts.map(post => (
            <li key={post.id} className='list-group-item'>{post.title}</li>
        ))}
   </ul>
  )
}

export default Posts