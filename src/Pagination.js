import React from 'react'

const Pagination = ({totalPages, paginate}) => {
  return (
    <div className="justify-end w-full p-5">
      <ul className="flex gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <div className="flex items-center justify-center w-8 h-8 p-1 bg-yellow-400 rounded">
            <li key={i + 1}>
              <a href="#" onClick={() => paginate(i + 1)}>
                {i + 1}
              </a>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Pagination