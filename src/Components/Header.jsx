import React from 'react'

const Header = ({title, total}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <p>지금까지 <strong>{total}</strong>표</p>
    </header>
  )
}

export default Header
