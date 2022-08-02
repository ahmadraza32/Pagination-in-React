import React from 'react'

function Table({loading, posts}) {

  if(loading) return <p>loading...</p>

  return (
    <div className='list-group'>
      {
        posts.map(post => {
          return <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        })
      }
    </div>
  )
}

export default Table