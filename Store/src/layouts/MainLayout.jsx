import React from 'react'

function MainLayout({children}) {
  return (
    <div>
        <header>Shop</header>
        {children}
        <footer>By Fatemeh Motamed</footer>
    </div>
  )
}

export default MainLayout