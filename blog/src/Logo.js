import React from 'react'
import Imagem from './logoImg.jpg'
import './Logo.css'

const Logo = () => {
  return (
    <div>
        <img src={Imagem} className="logo"/>
    </div>
  )
}

export default Logo