import React from 'react'

function Pagination({totalPosts,paginate, postsPerPage}) {
    const pageNumbers = []

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <div className='pagination'>
        {
            pageNumbers.map(num => {
                return <li key={num} className="page-item">
                    <a onClick={() => paginate(num)} href="!#" className="page-link">
                        {num}
                    </a>
                </li>
            })
        }
    </div>
  )
}

export default Pagination