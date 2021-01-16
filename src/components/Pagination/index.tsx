import React from 'react';

import { PaginationInterface } from './interface'

// styles
import './Pagination.scss'

export default ({ pages, prev, next, getPage }: PaginationInterface) => {
  return (
    <div className="pagination">
      <button disabled={prev === null} onClick={() => getPage('prev')}>&#60; Prev</button>
      <span>({next ? Number(next.split('=')[next.split('=').length - 1]) - 1 : Number(prev.split('=')[prev.split('=').length - 1]) + 1} / {pages})</span>
      <button disabled={next === null} onClick={() => getPage('next')}>Next &#62;</button>
    </div>
  )
}