import React from 'react';

import { MainInterface } from './interface'

// styles
import './Main.scss'

export default ({ children, isLoading, total }: MainInterface) => {
  return (
    <div className="main">
      <div className="main__count">Total ({total})</div>
      {isLoading ? <div className="main__loading">Loading...</div> : children}
    </div>
  )
}