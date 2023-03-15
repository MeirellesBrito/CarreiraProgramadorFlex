import React, { useState } from 'react'

const ConsultarApi = () => {
    var [erro, setErro] = useState(false)

    setTimeout(()=>{
        setErro(true)
    
    }, 2000)

    return (
        <div>
            {erro == true ? (<p>Ha erros</p>) :(null)}
        </div>
    )
}

export default ConsultarApi
