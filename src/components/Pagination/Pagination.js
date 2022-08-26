import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            {/* <a onClick={() => paginate(number)} href='/' className='page-link'>
              {number}
            </a> */}
            <button onClick={() => paginate(number)} className='page-link'>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;