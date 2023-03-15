import React from 'react'
import  './BotaoLegal.css'

const BotaoLegal = ({text}) => {
  return (
    <button className='botaoLegal'>
        {text}
    </button>
  )
}

export default BotaoLegal