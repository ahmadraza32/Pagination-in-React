import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Pagination from './Pagination'
import Table from './Table'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    async function go(){
      setLoading(true)
      const res = await axios('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }

    go()
  }, [])

  const paginate = num => setCurrentPage(num)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className='container'>
      <h1>Pagination of 100 posts</h1>
      <Table posts={currentPosts} loading={loading} />
      <Pagination totalPosts={posts.length} paginate={paginate} postsPerPage={postsPerPage} />
    </div>
  )
}

export default App