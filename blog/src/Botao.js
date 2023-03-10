import React, { useState } from 'react'


export const Botao = () => {
    var [clickNoBotao, setClickNoBotao ] = useState(0);
    
    const handleClick = () => {
        setClickNoBotao(++clickNoBotao)
    }
    return (
        <div>
            <button onClick={ handleClick }>client</button>
            <p>{ clickNoBotao }</p>
        </div>
    )
}

export default Botao