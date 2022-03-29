import React from 'react'

function Pagination({postsPerPage,totalPosts,paginate}) {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }

  return (
    <nav>
      <ul className='pagination' style={{display: 'flex',justifyContent: 'center'}}>
        {pageNumbers.map(number => (
          <li onClick={() => paginate(number)} key={number} className='page-item'>
            <a  href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination